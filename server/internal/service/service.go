package service

import (
	"context"
	"encoding/json"
	"errors"
	"fmt"
	"math/rand"
	"strings"
	"time"

	"github.com/jackc/pgx/v5"
	"github.com/jackc/pgx/v5/pgxpool"
)

type Service struct {
	db *pgxpool.Pool
}

type Player struct {
	ID          int64           `json:"id"`
	UID         string          `json:"uid"`
	Name        string          `json:"name"`
	ExtInfo     json.RawMessage `json:"ext_info"`
	ServerInfo  json.RawMessage `json:"server_info"`
	CreatedAt   time.Time       `json:"created_at"`
	UpdatedAt   time.Time       `json:"updated_at"`
	LastLoginAt time.Time       `json:"last_login_at"`
}

type SaveRecord struct {
	ID        int64           `json:"id"`
	PlayerID  int64           `json:"player_id"`
	Day       int             `json:"day"`
	SaveName  string          `json:"save_name"`
	Save      json.RawMessage `json:"save"`
	CreatedAt time.Time       `json:"created_at"`
	Player    PlayerBrief     `json:"player"`
}

type PlayerBrief struct {
	ID   int64  `json:"id"`
	Name string `json:"name"`
}

type RankingPlayer struct {
	ID   int64  `json:"id"`
	Name string `json:"name"`
}

type RankingEntry struct {
	Rank   int64         `json:"rank"`
	Score  float64       `json:"score"`
	Player RankingPlayer `json:"player"`
}

type RankingResult struct {
	Players []RankingEntry `json:"players"`
	Self    RankingEntry   `json:"self"`
}

func New(db *pgxpool.Pool) *Service {
	return &Service{db: db}
}

func (s *Service) Login(ctx context.Context, uid string) (Player, error) {
	uid = strings.TrimSpace(uid)
	if uid == "" {
		return Player{}, errors.New("缺少uid")
	}

	player, err := s.findPlayerByUID(ctx, uid)
	if err == nil {
		return s.touchLogin(ctx, player.ID)
	}
	if !errors.Is(err, pgx.ErrNoRows) {
		return Player{}, err
	}

	name := randomName()
	row := s.db.QueryRow(ctx, `
		INSERT INTO players (uid, name)
		VALUES ($1, $2)
		RETURNING id, uid, name, ext_info, server_info, created_at, updated_at, last_login_at
	`, uid, name)
	return scanPlayer(row)
}

func (s *Service) ValidatePlayer(ctx context.Context, playerID int64, uid string) (Player, error) {
	if playerID <= 0 || strings.TrimSpace(uid) == "" {
		return Player{}, errors.New("缺少玩家校验信息")
	}

	row := s.db.QueryRow(ctx, `
		SELECT id, uid, name, ext_info, server_info, created_at, updated_at, last_login_at
		FROM players
		WHERE id = $1 AND uid = $2
	`, playerID, uid)

	player, err := scanPlayer(row)
	if errors.Is(err, pgx.ErrNoRows) {
		return Player{}, errors.New("玩家校验失败")
	}
	return player, err
}

func (s *Service) Rename(ctx context.Context, playerID int64, uid string, name string) (Player, error) {
	if _, err := s.ValidatePlayer(ctx, playerID, uid); err != nil {
		return Player{}, err
	}

	name = strings.TrimSpace(name)
	if name == "" {
		return Player{}, errors.New("缺少name")
	}
	if len([]rune(name)) > 50 {
		return Player{}, errors.New("name不能超过50个字符")
	}

	row := s.db.QueryRow(ctx, `
		UPDATE players
		SET name = $1, updated_at = NOW()
		WHERE id = $2
		RETURNING id, uid, name, ext_info, server_info, created_at, updated_at, last_login_at
	`, name, playerID)
	return scanPlayer(row)
}

func (s *Service) UpdateExtInfo(ctx context.Context, playerID int64, uid string, extInfo json.RawMessage) (Player, error) {
	if _, err := s.ValidatePlayer(ctx, playerID, uid); err != nil {
		return Player{}, err
	}
	if !validJSON(extInfo) {
		return Player{}, errors.New("ext_info必须是有效JSON")
	}

	row := s.db.QueryRow(ctx, `
		UPDATE players
		SET ext_info = $1, updated_at = NOW()
		WHERE id = $2
		RETURNING id, uid, name, ext_info, server_info, created_at, updated_at, last_login_at
	`, extInfo, playerID)
	return scanPlayer(row)
}

func (s *Service) CreateSave(ctx context.Context, playerID int64, uid string, day int, saveName string, save json.RawMessage) (SaveRecord, error) {
	if _, err := s.ValidatePlayer(ctx, playerID, uid); err != nil {
		return SaveRecord{}, err
	}
	if !validJSON(save) {
		return SaveRecord{}, errors.New("save必须是有效JSON")
	}
	if saveName = strings.TrimSpace(saveName); saveName == "" {
		saveName = "default"
	}

	row := s.db.QueryRow(ctx, `
		INSERT INTO saves (player_id, day, save_name, save)
		VALUES ($1, $2, $3, $4)
		RETURNING id, player_id, day, save_name, save, created_at
	`, playerID, day, saveName, save)
	return scanSave(row)
}

func (s *Service) RandomSave(ctx context.Context, playerID int64, uid string, day *int) (SaveRecord, error) {
	if _, err := s.ValidatePlayer(ctx, playerID, uid); err != nil {
		return SaveRecord{}, err
	}

	args := []any{playerID}
	where := "s.player_id <> $1"
	if day != nil {
		args = append(args, *day)
		where += fmt.Sprintf(" AND s.day = $%d", len(args))
	}

	row := s.db.QueryRow(ctx, `
		SELECT s.id, s.player_id, s.day, s.save_name, s.save, s.created_at, p.id, p.name
		FROM saves s
		JOIN players p ON p.id = s.player_id
		WHERE `+where+`
		ORDER BY RANDOM()
		LIMIT 1
	`, args...)

	record, err := scanSaveWithPlayer(row)
	if errors.Is(err, pgx.ErrNoRows) {
		return SaveRecord{}, errors.New("未找到符合条件的存档")
	}
	return record, err
}

func (s *Service) CleanupPlayerSaves(ctx context.Context, playerID int64, uid string) (int64, error) {
	if _, err := s.ValidatePlayer(ctx, playerID, uid); err != nil {
		return 0, err
	}

	tag, err := s.db.Exec(ctx, `DELETE FROM saves WHERE player_id = $1`, playerID)
	if err != nil {
		return 0, err
	}
	return tag.RowsAffected(), nil
}

func (s *Service) Ranking(ctx context.Context, playerID int64, uid string) (RankingResult, error) {
	if _, err := s.ValidatePlayer(ctx, playerID, uid); err != nil {
		return RankingResult{}, err
	}

	rows, err := s.db.Query(ctx, `
		WITH scored AS (
			SELECT
				id,
				name,
				updated_at,
				COALESCE(
					CASE
						WHEN (ext_info->>'积分') ~ '^-?[0-9]+(\.[0-9]+)?$'
						THEN (ext_info->>'积分')::double precision
					END,
					CASE
						WHEN (ext_info->>'point') ~ '^-?[0-9]+(\.[0-9]+)?$'
						THEN (ext_info->>'point')::double precision
					END,
					0
				) AS score
			FROM players
		),
		ranked AS (
			SELECT
				id,
				name,
				score,
				ROW_NUMBER() OVER (ORDER BY score DESC, updated_at ASC, id ASC) AS rank
			FROM scored
		)
		SELECT id, name, score, rank
		FROM ranked
		WHERE rank <= 50 OR id = $1
		ORDER BY rank ASC
	`, playerID)
	if err != nil {
		return RankingResult{}, err
	}
	defer rows.Close()

	result := RankingResult{Players: []RankingEntry{}}
	foundSelf := false
	for rows.Next() {
		var id int64
		var entry RankingEntry
		if err := rows.Scan(&id, &entry.Player.Name, &entry.Score, &entry.Rank); err != nil {
			return RankingResult{}, err
		}
		entry.Player.ID = id
		if entry.Rank <= 50 {
			result.Players = append(result.Players, entry)
		}
		if id == playerID {
			result.Self = entry
			foundSelf = true
		}
	}
	if err := rows.Err(); err != nil {
		return RankingResult{}, err
	}
	if !foundSelf {
		return RankingResult{}, errors.New("玩家排行计算失败")
	}
	return result, nil
}

func (s *Service) CreateLog(ctx context.Context, playerID *int64, uid string, level string, payload json.RawMessage) (int64, error) {
	if playerID != nil {
		if _, err := s.ValidatePlayer(ctx, *playerID, uid); err != nil {
			return 0, err
		}
	}
	if !validJSON(payload) {
		return 0, errors.New("log必须是有效JSON")
	}

	level = strings.TrimSpace(strings.ToLower(level))
	if level == "" {
		level = "info"
	}

	row := s.db.QueryRow(ctx, `
		INSERT INTO logs (player_id, level, log)
		VALUES ($1, $2, $3)
		RETURNING id
	`, playerID, level, payload)

	var id int64
	return id, row.Scan(&id)
}

func (s *Service) TransferPlayer(ctx context.Context, adminKey string, expectedAdminKey string, playerID int64, newUID string) (Player, error) {
	if expectedAdminKey == "" || adminKey != expectedAdminKey {
		return Player{}, errors.New("管理员校验失败")
	}
	if playerID <= 0 || strings.TrimSpace(newUID) == "" {
		return Player{}, errors.New("缺少转移参数")
	}

	row := s.db.QueryRow(ctx, `
		UPDATE players
		SET uid = $1, updated_at = NOW()
		WHERE id = $2
		RETURNING id, uid, name, ext_info, server_info, created_at, updated_at, last_login_at
	`, strings.TrimSpace(newUID), playerID)

	player, err := scanPlayer(row)
	if errors.Is(err, pgx.ErrNoRows) {
		return Player{}, errors.New("玩家不存在")
	}
	return player, err
}

func (s *Service) findPlayerByUID(ctx context.Context, uid string) (Player, error) {
	row := s.db.QueryRow(ctx, `
		SELECT id, uid, name, ext_info, server_info, created_at, updated_at, last_login_at
		FROM players
		WHERE uid = $1
	`, uid)
	return scanPlayer(row)
}

func (s *Service) touchLogin(ctx context.Context, playerID int64) (Player, error) {
	row := s.db.QueryRow(ctx, `
		UPDATE players
		SET last_login_at = NOW()
		WHERE id = $1
		RETURNING id, uid, name, ext_info, server_info, created_at, updated_at, last_login_at
	`, playerID)
	return scanPlayer(row)
}

type rowScanner interface {
	Scan(dest ...any) error
}

func scanPlayer(row rowScanner) (Player, error) {
	var player Player
	err := row.Scan(&player.ID, &player.UID, &player.Name, &player.ExtInfo, &player.ServerInfo, &player.CreatedAt, &player.UpdatedAt, &player.LastLoginAt)
	return player, err
}

func scanSave(row rowScanner) (SaveRecord, error) {
	var record SaveRecord
	err := row.Scan(&record.ID, &record.PlayerID, &record.Day, &record.SaveName, &record.Save, &record.CreatedAt)
	return record, err
}

func scanSaveWithPlayer(row rowScanner) (SaveRecord, error) {
	var record SaveRecord
	err := row.Scan(&record.ID, &record.PlayerID, &record.Day, &record.SaveName, &record.Save, &record.CreatedAt, &record.Player.ID, &record.Player.Name)
	return record, err
}

func validJSON(raw json.RawMessage) bool {
	return len(raw) > 0 && json.Valid(raw)
}

func randomName() string {
	adjectives := []string{"勇敢", "温柔", "潇洒", "神秘", "热血", "佛系", "机智", "幸运"}
	roles := []string{"流浪者", "旅人", "剑客", "猎人", "新人", "老友", "行者", "冒险家"}
	return adjectives[rand.Intn(len(adjectives))] + "的" + roles[rand.Intn(len(roles))]
}
