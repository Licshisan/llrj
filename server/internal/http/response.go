package httpapi

import (
	"encoding/json"
	"net/http"
)

type Response struct {
	Code int    `json:"code"`
	Msg  string `json:"msg"`
	Data any    `json:"data,omitempty"`
}

func OK(w http.ResponseWriter, msg string, data any) {
	writeJSON(w, http.StatusOK, Response{Code: 200, Msg: msg, Data: data})
}

func Fail(w http.ResponseWriter, status int, msg string) {
	writeJSON(w, status, Response{Code: status, Msg: msg})
}

func writeJSON(w http.ResponseWriter, status int, payload Response) {
	w.Header().Set("Content-Type", "application/json; charset=utf-8")
	w.WriteHeader(status)
	_ = json.NewEncoder(w).Encode(payload)
}
