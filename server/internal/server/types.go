package server

import "time"

type player struct {
	ID         int64          `json:"id"`
	UID        string         `json:"uid,omitempty"`
	ClientInfo map[string]any `json:"client_info"`
	ServerInfo map[string]any `json:"server_info"`
	CreatedAt  time.Time      `json:"created_at"`
	UpdatedAt  time.Time      `json:"updated_at"`
}

type leaderboardEntry struct {
	PlayerID   int64   `json:"player_id"`
	PlayerName string  `json:"player_name"`
	Score      float64 `json:"score"`
	Rank       int     `json:"rank"`
}

type leaderboardResponse struct {
	List []leaderboardEntry `json:"list"`
	Self int                `json:"self"`
}

type pioneerResponse struct {
	ID          int64     `json:"id"`
	Name        string    `json:"name"`
	Description string    `json:"description"`
	PlayerID    int64     `json:"player_id"`
	PlayerName  string    `json:"player_name"`
	CreatedAt   time.Time `json:"created_at"`
}

type saveResponse struct {
	ID       int64          `json:"id"`
	SaveName string         `json:"save_name"`
	Save     map[string]any `json:"save"`
	Player   map[string]any `json:"player"`
}
