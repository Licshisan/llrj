package server

import (
	"encoding/json"
	"strings"
	"testing"
)

func TestClientInfoScores(t *testing.T) {
	clientInfo := map[string]any{
		"name":   "Alice",
		"scores": json.Number("42.5"),
		"collections": map[string]any{
			"coin": json.Number("3"),
			"gem":  "4",
			"bad":  "x",
		},
	}

	if got := playerNameFromClientInfo(clientInfo); got != "Alice" {
		t.Fatalf("playerNameFromClientInfo() = %q", got)
	}
	if got := scoreFromClientInfo(clientInfo); got != 42.5 {
		t.Fatalf("scoreFromClientInfo() = %v", got)
	}
	if got := collectionScoreFromClientInfo(clientInfo); got != 7 {
		t.Fatalf("collectionScoreFromClientInfo() = %v", got)
	}
}

func TestRandomPlayerName(t *testing.T) {
	name := randomPlayerName()
	if !strings.Contains(name, "的") {
		t.Fatalf("randomPlayerName() = %q, want adjective role format", name)
	}
}

func TestSortLeaderboard(t *testing.T) {
	entries := []leaderboardEntry{
		{PlayerID: 3, Score: 10},
		{PlayerID: 2, Score: 20},
		{PlayerID: 1, Score: 20},
	}

	sortLeaderboard(entries)

	wantIDs := []int64{1, 2, 3}
	for i, want := range wantIDs {
		if entries[i].PlayerID != want {
			t.Fatalf("entries[%d].PlayerID = %d, want %d", i, entries[i].PlayerID, want)
		}
	}
}
