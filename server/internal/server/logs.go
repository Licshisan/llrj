package server

import (
	_ "embed"
	"fmt"
	"net/http"
	"strconv"
	"strings"
	"time"

	"github.com/jackc/pgx/v5/pgtype"
)

//go:embed logs_view.html
var logsPageHTML string

type logResponse struct {
	ID        int64          `json:"id"`
	PlayerID  *int64         `json:"player_id,omitempty"`
	Level     string         `json:"level"`
	Log       map[string]any `json:"log"`
	CreatedAt time.Time      `json:"created_at"`
}

func (a *App) logsPage(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "text/html; charset=utf-8")
	w.WriteHeader(http.StatusOK)
	_, _ = w.Write([]byte(logsPageHTML))
}

func (a *App) listLogs(w http.ResponseWriter, r *http.Request) {
	queryValues := r.URL.Query()
	var conditions []string
	var args []any

	playerIDRaw := strings.TrimSpace(queryValues.Get("player_id"))
	if playerIDRaw != "" {
		playerID, err := strconv.ParseInt(playerIDRaw, 10, 64)
		if err != nil || playerID <= 0 {
			writeError(w, http.StatusBadRequest, "invalid player_id")
			return
		}
		args = append(args, playerID)
		conditions = append(conditions, fmt.Sprintf("player_id = $%d", len(args)))
	}

	level := strings.TrimSpace(queryValues.Get("level"))
	if level != "" {
		args = append(args, level)
		conditions = append(conditions, fmt.Sprintf("level = $%d", len(args)))
	}

	limit := 100
	limitRaw := strings.TrimSpace(queryValues.Get("limit"))
	if limitRaw != "" {
		parsed, err := strconv.Atoi(limitRaw)
		if err != nil || parsed <= 0 {
			writeError(w, http.StatusBadRequest, "invalid limit")
			return
		}
		if parsed > 500 {
			parsed = 500
		}
		limit = parsed
	}

	args = append(args, limit)
	query := `
		SELECT id, player_id, level, log, created_at
		FROM logs
	`
	if len(conditions) > 0 {
		query += " WHERE " + strings.Join(conditions, " AND ")
	}
	query += fmt.Sprintf(" ORDER BY created_at DESC, id DESC LIMIT $%d", len(args))

	rows, err := a.db.Query(r.Context(), query, args...)
	if err != nil {
		writeError(w, http.StatusInternalServerError, err.Error())
		return
	}
	defer rows.Close()

	resp := make([]logResponse, 0)
	for rows.Next() {
		var item logResponse
		var playerID pgtype.Int8
		if err := rows.Scan(&item.ID, &playerID, &item.Level, &item.Log, &item.CreatedAt); err != nil {
			writeError(w, http.StatusInternalServerError, err.Error())
			return
		}
		if playerID.Valid {
			value := playerID.Int64
			item.PlayerID = &value
		}
		if item.Log == nil {
			item.Log = map[string]any{}
		}
		resp = append(resp, item)
	}
	if err := rows.Err(); err != nil {
		writeError(w, http.StatusInternalServerError, err.Error())
		return
	}

	writeJSON(w, http.StatusOK, resp)
}
