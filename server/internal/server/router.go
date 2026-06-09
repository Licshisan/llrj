package server

import "net/http"

func (a *App) Routes() http.Handler {
	mux := http.NewServeMux()
	mux.HandleFunc("GET /health", a.health)
	mux.HandleFunc("POST /login", a.login)
	mux.HandleFunc("POST /player/upload", a.uploadPlayer)
	mux.HandleFunc("POST /save/upload", a.uploadSave)
	mux.HandleFunc("POST /log", a.uploadLog)
	mux.HandleFunc("POST /compensations/claim", a.claimCompensations)
	mux.HandleFunc("GET /leaderboard", a.leaderboard)
	mux.HandleFunc("GET /collection-leaderboard", a.collectionLeaderboard)
	mux.HandleFunc("GET /pioneers", a.pioneers)
	mux.HandleFunc("GET /random-save", a.randomSave)
	mux.HandleFunc("GET /top-save", a.topSave)
	return withCORS(withJSON(mux))
}

func withJSON(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "application/json; charset=utf-8")
		next.ServeHTTP(w, r)
	})
}

func withCORS(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Set("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
		w.Header().Set("Access-Control-Allow-Headers", "Content-Type")

		if r.Method == http.MethodOptions {
			w.WriteHeader(http.StatusNoContent)
			return
		}

		next.ServeHTTP(w, r)
	})
}
