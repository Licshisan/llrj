package server

import (
	"context"
	"encoding/json"
	"errors"
	"net/http"
	"strconv"
	"strings"
	"time"

	"github.com/jackc/pgx/v5"
)

func (a *App) health(w http.ResponseWriter, r *http.Request) {
	writeJSON(w, http.StatusOK, map[string]string{"status": "ok"})
}

func (a *App) login(w http.ResponseWriter, r *http.Request) {
	var req struct {
		UID string `json:"uid"`
	}
	if !readJSON(w, r, &req) {
		return
	}
	req.UID = strings.TrimSpace(req.UID)
	if req.UID == "" {
		writeError(w, http.StatusBadRequest, "uid is required")
		return
	}

	ctx := r.Context()
	p, err := a.getPlayerByUID(ctx, req.UID)
	if errors.Is(err, pgx.ErrNoRows) {
		p, err = a.createPlayer(ctx, req.UID)
	}
	if err != nil {
		writeError(w, http.StatusInternalServerError, err.Error())
		return
	}

	writeJSON(w, http.StatusOK, p)
}

func (a *App) uploadPlayer(w http.ResponseWriter, r *http.Request) {
	var req struct {
		UID        string         `json:"uid"`
		ID         int64          `json:"id"`
		ClientInfo map[string]any `json:"client_info"`
	}
	if !readJSON(w, r, &req) {
		return
	}
	if _, ok := a.requirePlayer(w, r, req.UID, req.ID); !ok {
		return
	}
	if req.ClientInfo == nil {
		req.ClientInfo = map[string]any{}
	}

	clientJSON, err := json.Marshal(req.ClientInfo)
	if err != nil {
		writeError(w, http.StatusBadRequest, "invalid client_info")
		return
	}

	ctx := r.Context()
	_, err = a.db.Exec(ctx, `
		UPDATE players
		SET client_info = $1::jsonb, updated_at = NOW()
		WHERE id = $2 AND uid = $3
	`, clientJSON, req.ID, req.UID)
	if err != nil {
		writeError(w, http.StatusInternalServerError, err.Error())
		return
	}

	if err := a.insertPioneers(ctx, req.ID, req.ClientInfo); err != nil {
		writeError(w, http.StatusInternalServerError, err.Error())
		return
	}

	a.cache.clear()
	p, err := a.getPlayerByID(ctx, req.ID)
	if err != nil {
		writeError(w, http.StatusInternalServerError, err.Error())
		return
	}
	writeJSON(w, http.StatusOK, p)
}

func (a *App) uploadSave(w http.ResponseWriter, r *http.Request) {
	var req struct {
		UID            string         `json:"uid"`
		ID             int64          `json:"id"`
		Day            int            `json:"day"`
		SaveName       string         `json:"save_name"`
		SaveDifficulty string         `json:"save_difficulty"`
		Save           map[string]any `json:"save"`
	}
	if !readJSON(w, r, &req) {
		return
	}
	if _, ok := a.requirePlayer(w, r, req.UID, req.ID); !ok {
		return
	}
	if req.Save == nil {
		writeError(w, http.StatusBadRequest, "save is required")
		return
	}
	if req.SaveName == "" {
		req.SaveName = "default"
	}
	if req.SaveDifficulty == "" {
		req.SaveDifficulty = "default"
	}

	saveJSON, err := json.Marshal(req.Save)
	if err != nil {
		writeError(w, http.StatusBadRequest, "invalid save")
		return
	}

	var id int64
	var createdAt time.Time
	err = a.db.QueryRow(r.Context(), `
		INSERT INTO saves(player_id, day, save_name, save_difficulty, save)
		VALUES ($1, $2, $3, $4, $5::jsonb)
		RETURNING id, created_at
	`, req.ID, req.Day, req.SaveName, req.SaveDifficulty, saveJSON).Scan(&id, &createdAt)
	if err != nil {
		writeError(w, http.StatusInternalServerError, err.Error())
		return
	}

	writeJSON(w, http.StatusOK, map[string]any{
		"id":              id,
		"player_id":       req.ID,
		"day":             req.Day,
		"save_name":       req.SaveName,
		"save_difficulty": req.SaveDifficulty,
		"save":            req.Save,
		"created_at":      createdAt,
	})
}

func (a *App) uploadLog(w http.ResponseWriter, r *http.Request) {
	var req struct {
		UID   string         `json:"uid"`
		ID    int64          `json:"id"`
		Level string         `json:"level"`
		Log   map[string]any `json:"log"`
	}
	if !readJSON(w, r, &req) {
		return
	}
	if _, ok := a.requirePlayer(w, r, req.UID, req.ID); !ok {
		return
	}
	if req.Level == "" {
		req.Level = "info"
	}
	if req.Log == nil {
		req.Log = map[string]any{}
	}

	logJSON, err := json.Marshal(req.Log)
	if err != nil {
		writeError(w, http.StatusBadRequest, "invalid log")
		return
	}

	var id int64
	var createdAt time.Time
	err = a.db.QueryRow(r.Context(), `
		INSERT INTO logs(player_id, level, log)
		VALUES ($1, $2, $3::jsonb)
		RETURNING id, created_at
	`, req.ID, req.Level, logJSON).Scan(&id, &createdAt)
	if err != nil {
		writeError(w, http.StatusInternalServerError, err.Error())
		return
	}

	writeJSON(w, http.StatusOK, map[string]any{
		"id":         id,
		"player_id":  req.ID,
		"level":      req.Level,
		"log":        req.Log,
		"created_at": createdAt,
	})
}

func (a *App) claimCompensations(w http.ResponseWriter, r *http.Request) {
	var req struct {
		UID   string `json:"uid"`
		ID    int64  `json:"id"`
		Field string `json:"field"`
	}
	if !readJSON(w, r, &req) {
		return
	}

	if req.Field == "" {
		req.Field = "compensations"
	}

	// 简单防注入：仅允许字母、数字、下划线
	for _, c := range req.Field {
		if !((c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z') || (c >= '0' && c <= '9') || c == '_') {
			writeError(w, http.StatusBadRequest, "invalid field name")
			return
		}
	}

	if _, ok := a.requirePlayer(w, r, req.UID, req.ID); !ok {
		return
	}

	// 动态拼接 jsonb 字段减法 SQL
	sql := `
		UPDATE players
		SET server_info = server_info - $3,
		    updated_at = NOW()
		WHERE id = $1 AND uid = $2
	`
	_, err := a.db.Exec(r.Context(), sql, req.ID, req.UID, req.Field)
	if err != nil {
		writeError(w, http.StatusInternalServerError, err.Error())
		return
	}

	p, err := a.getPlayerByID(r.Context(), req.ID)
	if err != nil {
		writeError(w, http.StatusInternalServerError, err.Error())
		return
	}
	writeJSON(w, http.StatusOK, p)
}

func (a *App) leaderboard(w http.ResponseWriter, r *http.Request) {
	p, ok := a.requirePlayerFromQuery(w, r)
	if !ok {
		return
	}

	key := "leaderboard:" + strconv.FormatInt(p.ID, 10)
	if data, ok := a.cache.get(key); ok {
		w.WriteHeader(http.StatusOK)
		_, _ = w.Write(data)
		return
	}

	resp, err := a.buildLeaderboard(r.Context(), p.ID, scoreFromClientInfo)
	if err != nil {
		writeError(w, http.StatusInternalServerError, err.Error())
		return
	}
	a.writeCachedJSON(w, key, resp)
}

func (a *App) collectionLeaderboard(w http.ResponseWriter, r *http.Request) {
	p, ok := a.requirePlayerFromQuery(w, r)
	if !ok {
		return
	}

	key := "collection-leaderboard:" + strconv.FormatInt(p.ID, 10)
	if data, ok := a.cache.get(key); ok {
		w.WriteHeader(http.StatusOK)
		_, _ = w.Write(data)
		return
	}

	resp, err := a.buildLeaderboard(r.Context(), p.ID, collectionScoreFromClientInfo)
	if err != nil {
		writeError(w, http.StatusInternalServerError, err.Error())
		return
	}
	a.writeCachedJSON(w, key, resp)
}

func (a *App) pioneers(w http.ResponseWriter, r *http.Request) {
	if _, ok := a.requirePlayerFromQuery(w, r); !ok {
		return
	}

	rows, err := a.db.Query(r.Context(), `
		SELECT pn.id, pn.name, pn.description, pn.player_id,
		       COALESCE(p.client_info->>'name', '') AS player_name,
		       pn.created_at
		FROM pioneers pn
		JOIN players p ON p.id = pn.player_id
		ORDER BY pn.created_at DESC, pn.id DESC
	`)
	if err != nil {
		writeError(w, http.StatusInternalServerError, err.Error())
		return
	}
	defer rows.Close()

	var resp []pioneerResponse
	for rows.Next() {
		var item pioneerResponse
		if err := rows.Scan(&item.ID, &item.Name, &item.Description, &item.PlayerID, &item.PlayerName, &item.CreatedAt); err != nil {
			writeError(w, http.StatusInternalServerError, err.Error())
			return
		}
		resp = append(resp, item)
	}
	if err := rows.Err(); err != nil {
		writeError(w, http.StatusInternalServerError, err.Error())
		return
	}

	writeJSON(w, http.StatusOK, resp)
}

func (a *App) randomSave(w http.ResponseWriter, r *http.Request) {
	if _, ok := a.requirePlayerFromQuery(w, r); !ok {
		return
	}

	day, ok := intQuery(w, r, "day")
	if !ok {
		return
	}

	saveDifficulty := strings.TrimSpace(r.URL.Query().Get("save_difficulty"))
	resp, err := a.findSave(r.Context(), `
		SELECT s.id, s.save_name, s.save, to_jsonb(p) AS player
		FROM saves s
		JOIN players p ON p.id = s.player_id
		WHERE s.day = $1
		  AND s.created_at >= NOW() - INTERVAL '30 days'
		  AND ($2 = '' OR s.save_difficulty = $2)
		ORDER BY RANDOM()
		LIMIT 1
	`, day, saveDifficulty)
	if errors.Is(err, pgx.ErrNoRows) {
		writeError(w, http.StatusNotFound, "save not found")
		return
	}
	if err != nil {
		writeError(w, http.StatusInternalServerError, err.Error())
		return
	}

	writeJSON(w, http.StatusOK, resp)
}

func (a *App) topSave(w http.ResponseWriter, r *http.Request) {
	if _, ok := a.requirePlayerFromQuery(w, r); !ok {
		return
	}

	saveDifficulty := strings.TrimSpace(r.URL.Query().Get("save_difficulty"))
	resp, err := a.findSave(r.Context(), `
		WITH ranked AS (
			SELECT id
			FROM players
			ORDER BY
				CASE
					WHEN client_info->>'scores' ~ '^-?[0-9]+(\.[0-9]+)?$'
					THEN (client_info->>'scores')::numeric
					ELSE 0
				END DESC,
				id ASC
			LIMIT 1
		)
		SELECT s.id, s.save_name, s.save, to_jsonb(p) AS player
		FROM saves s
		JOIN ranked r ON r.id = s.player_id
		JOIN players p ON p.id = s.player_id
		WHERE s.created_at >= NOW() - INTERVAL '30 days'
		  AND ($1 = '' OR s.save_difficulty = $1)
		ORDER BY s.created_at DESC, s.id DESC
		LIMIT 1
	`, saveDifficulty)
	if errors.Is(err, pgx.ErrNoRows) {
		writeError(w, http.StatusNotFound, "save not found")
		return
	}
	if err != nil {
		writeError(w, http.StatusInternalServerError, err.Error())
		return
	}

	writeJSON(w, http.StatusOK, resp)
}

func (a *App) buildLeaderboard(ctx context.Context, selfID int64, scoreFn func(map[string]any) float64) (leaderboardResponse, error) {
	rows, err := a.db.Query(ctx, `SELECT id, client_info FROM players ORDER BY id ASC`)
	if err != nil {
		return leaderboardResponse{}, err
	}
	defer rows.Close()

	var entries []leaderboardEntry
	for rows.Next() {
		var id int64
		var clientInfo map[string]any
		if err := rows.Scan(&id, &clientInfo); err != nil {
			return leaderboardResponse{}, err
		}
		entries = append(entries, leaderboardEntry{
			PlayerID:   id,
			PlayerName: playerNameFromClientInfo(clientInfo),
			Score:      scoreFn(clientInfo),
		})
	}
	if err := rows.Err(); err != nil {
		return leaderboardResponse{}, err
	}

	sortLeaderboard(entries)
	resp := leaderboardResponse{Self: 0}
	for i := range entries {
		entries[i].Rank = i + 1
		if entries[i].PlayerID == selfID {
			resp.Self = entries[i].Rank
		}
		if i < 100 {
			resp.List = append(resp.List, entries[i])
		}
	}

	return resp, nil
}

func (a *App) writeCachedJSON(w http.ResponseWriter, key string, value any) {
	data, err := json.Marshal(value)
	if err != nil {
		writeError(w, http.StatusInternalServerError, err.Error())
		return
	}
	a.cache.set(key, data, 30*time.Second)
	w.WriteHeader(http.StatusOK)
	_, _ = w.Write(data)
}

func (a *App) findSave(ctx context.Context, query string, args ...any) (saveResponse, error) {
	var resp saveResponse
	var save map[string]any
	var playerJSON map[string]any
	err := a.db.QueryRow(ctx, query, args...).Scan(&resp.ID, &resp.SaveName, &save, &playerJSON)
	if err != nil {
		return saveResponse{}, err
	}
	delete(playerJSON, "uid")
	resp.Save = save
	resp.Player = playerJSON
	return resp, nil
}

func (a *App) getPlayerByUID(ctx context.Context, uid string) (player, error) {
	var p player
	err := a.db.QueryRow(ctx, `
		SELECT id, uid, client_info, server_info, created_at, updated_at
		FROM players
		WHERE uid = $1
	`, uid).Scan(&p.ID, &p.UID, &p.ClientInfo, &p.ServerInfo, &p.CreatedAt, &p.UpdatedAt)
	return p, err
}

func (a *App) getPlayerByID(ctx context.Context, id int64) (player, error) {
	var p player
	err := a.db.QueryRow(ctx, `
		SELECT id, uid, client_info, server_info, created_at, updated_at
		FROM players
		WHERE id = $1
	`, id).Scan(&p.ID, &p.UID, &p.ClientInfo, &p.ServerInfo, &p.CreatedAt, &p.UpdatedAt)
	return p, err
}

func (a *App) createPlayer(ctx context.Context, uid string) (player, error) {
	clientInfo := map[string]any{
		"name":         randomPlayerName(),
		"win_text":     "",
		"fail_text":    "",
		"scores":       0,
		"achievements": []any{},
		"collections":  map[string]any{},
		"updated_at":   "",
	}
	clientJSON, err := json.Marshal(clientInfo)
	if err != nil {
		return player{}, err
	}

	var p player
	err = a.db.QueryRow(ctx, `
		INSERT INTO players(uid, client_info)
		VALUES ($1, $2::jsonb)
		RETURNING id, uid, client_info, server_info, created_at, updated_at
	`, uid, clientJSON).Scan(&p.ID, &p.UID, &p.ClientInfo, &p.ServerInfo, &p.CreatedAt, &p.UpdatedAt)
	return p, err
}

func (a *App) requirePlayerFromQuery(w http.ResponseWriter, r *http.Request) (player, bool) {
	id, ok := int64Query(w, r, "id")
	if !ok {
		return player{}, false
	}
	uid := strings.TrimSpace(r.URL.Query().Get("uid"))
	return a.requirePlayer(w, r, uid, id)
}

func (a *App) requirePlayer(w http.ResponseWriter, r *http.Request, uid string, id int64) (player, bool) {
	if strings.TrimSpace(uid) == "" || id <= 0 {
		writeError(w, http.StatusUnauthorized, "unauthorized")
		return player{}, false
	}

	var p player
	err := a.db.QueryRow(r.Context(), `
		SELECT id, uid, client_info, server_info, created_at, updated_at
		FROM players
		WHERE id = $1 AND uid = $2
	`, id, uid).Scan(&p.ID, &p.UID, &p.ClientInfo, &p.ServerInfo, &p.CreatedAt, &p.UpdatedAt)
	if err != nil {
		writeError(w, http.StatusUnauthorized, "unauthorized")
		return player{}, false
	}
	return p, true
}

func (a *App) insertPioneers(ctx context.Context, playerID int64, clientInfo map[string]any) error {
	items, ok := clientInfo["achievements"].([]any)
	if !ok {
		return nil
	}

	for _, raw := range items {
		item, ok := raw.(map[string]any)
		if !ok {
			continue
		}
		name := strings.TrimSpace(stringValue(item["name"]))
		description := strings.TrimSpace(stringValue(item["description"]))
		if name == "" || description == "" {
			continue
		}
		_, err := a.db.Exec(ctx, `
			INSERT INTO pioneers(name, description, player_id)
			VALUES ($1, $2, $3)
			ON CONFLICT (name) DO NOTHING
		`, name, description, playerID)
		if err != nil {
			return err
		}
	}
	return nil
}
