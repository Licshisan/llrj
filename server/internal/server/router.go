package server

import (
	"log"
	"net"
	"net/http"
	"time"
)

func (a *App) Routes() http.Handler {
	mux := http.NewServeMux()
	mux.HandleFunc("GET /health", a.health)
	mux.HandleFunc("POST /login", a.login)
	mux.HandleFunc("POST /player/upload", a.uploadPlayer)
	mux.HandleFunc("POST /save/upload", a.uploadSave)
	mux.HandleFunc("POST /log", a.uploadLog)
	mux.HandleFunc("GET /logs", a.listLogs)
	mux.HandleFunc("GET /logs/view", a.logsPage)
	mux.HandleFunc("POST /compensations/claim", a.claimCompensations)
	mux.HandleFunc("GET /leaderboard", a.leaderboard)
	mux.HandleFunc("GET /collection-leaderboard", a.collectionLeaderboard)
	mux.HandleFunc("GET /pioneers", a.pioneers)
	mux.HandleFunc("GET /random-save", a.randomSave)
	mux.HandleFunc("GET /top-save", a.topSave)
	return withRequestLog(withCORS(withJSON(mux)))
}

type statusRecorder struct {
	http.ResponseWriter
	status int
}

func (r *statusRecorder) WriteHeader(status int) {
	r.status = status
	r.ResponseWriter.WriteHeader(status)
}

func withRequestLog(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		start := time.Now()
		recorder := &statusRecorder{
			ResponseWriter: w,
			status:         http.StatusOK,
		}

		next.ServeHTTP(recorder, r)

		log.Printf(
			"request method=%s path=%s status=%d duration=%s remote=%s",
			r.Method,
			r.URL.RequestURI(),
			recorder.status,
			time.Since(start).Round(time.Millisecond),
			remoteAddr(r),
		)
	})
}

func remoteAddr(r *http.Request) string {
	host, _, err := net.SplitHostPort(r.RemoteAddr)
	if err != nil {
		return r.RemoteAddr
	}
	return host
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
