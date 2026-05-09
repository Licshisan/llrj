package httpapi

import (
	"encoding/json"
	"net/http"
	"strconv"
	"strings"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"

	"llrj-remake/server/internal/service"
)

type Handler struct {
	service  *service.Service
	adminKey string
}

func NewRouter(svc *service.Service, adminKey string) http.Handler {
	handler := &Handler{service: svc, adminKey: adminKey}

	r := chi.NewRouter()
	r.Use(middleware.RequestID)
	r.Use(middleware.RealIP)
	r.Use(middleware.Recoverer)
	r.Use(cors)

	r.Get("/health", handler.health)
	r.Post("/login", handler.login)
	r.Post("/log", handler.createLog)
	r.Post("/rename", handler.rename)
	r.Post("/save", handler.createSave)
	r.Get("/random-save", handler.randomSave)
	r.Post("/save/cleanup", handler.cleanupSaves)
	r.Post("/admin/player/transfer", handler.transferPlayer)

	return r
}

func cors(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Set("Access-Control-Allow-Headers", "Content-Type, X-Admin-Key")
		w.Header().Set("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
		if r.Method == http.MethodOptions {
			w.WriteHeader(http.StatusNoContent)
			return
		}
		next.ServeHTTP(w, r)
	})
}

func (h *Handler) health(w http.ResponseWriter, r *http.Request) {
	OK(w, "ok", map[string]string{"status": "ok"})
}

func (h *Handler) login(w http.ResponseWriter, r *http.Request) {
	var req struct {
		UID string `json:"uid"`
	}
	if !decodeJSON(w, r, &req) {
		return
	}

	player, err := h.service.Login(r.Context(), req.UID)
	if err != nil {
		Fail(w, http.StatusBadRequest, err.Error())
		return
	}
	OK(w, "登录成功", player)
}

func (h *Handler) createLog(w http.ResponseWriter, r *http.Request) {
	var req struct {
		PlayerID *int64          `json:"player_id"`
		UID      string          `json:"uid"`
		Level    string          `json:"level"`
		Log      json.RawMessage `json:"log"`
	}
	if !decodeJSON(w, r, &req) {
		return
	}

	id, err := h.service.CreateLog(r.Context(), req.PlayerID, req.UID, req.Level, req.Log)
	if err != nil {
		Fail(w, http.StatusBadRequest, err.Error())
		return
	}
	OK(w, "日志上报成功", map[string]int64{"id": id})
}

func (h *Handler) rename(w http.ResponseWriter, r *http.Request) {
	var req struct {
		PlayerID int64  `json:"player_id"`
		UID      string `json:"uid"`
		Name     string `json:"name"`
	}
	if !decodeJSON(w, r, &req) {
		return
	}

	player, err := h.service.Rename(r.Context(), req.PlayerID, req.UID, req.Name)
	if err != nil {
		Fail(w, http.StatusBadRequest, err.Error())
		return
	}
	OK(w, "玩家重命名成功", player)
}

func (h *Handler) createSave(w http.ResponseWriter, r *http.Request) {
	var req struct {
		PlayerID int64           `json:"player_id"`
		UID      string          `json:"uid"`
		Day      int             `json:"day"`
		SaveName string          `json:"save_name"`
		Save     json.RawMessage `json:"save"`
	}
	if !decodeJSON(w, r, &req) {
		return
	}

	record, err := h.service.CreateSave(r.Context(), req.PlayerID, req.UID, req.Day, req.SaveName, req.Save)
	if err != nil {
		Fail(w, http.StatusBadRequest, err.Error())
		return
	}
	OK(w, "存档上传成功", record)
}

func (h *Handler) randomSave(w http.ResponseWriter, r *http.Request) {
	playerID, err := parseInt64(r.URL.Query().Get("player_id"))
	if err != nil {
		Fail(w, http.StatusBadRequest, "缺少player_id")
		return
	}
	uid := strings.TrimSpace(r.URL.Query().Get("uid"))

	var day *int
	if rawDay := strings.TrimSpace(r.URL.Query().Get("day")); rawDay != "" {
		value, err := strconv.Atoi(rawDay)
		if err != nil {
			Fail(w, http.StatusBadRequest, "day必须是数字")
			return
		}
		day = &value
	}

	record, err := h.service.RandomSave(r.Context(), playerID, uid, day)
	if err != nil {
		Fail(w, http.StatusBadRequest, err.Error())
		return
	}
	OK(w, "获取随机存档成功", record)
}

func (h *Handler) cleanupSaves(w http.ResponseWriter, r *http.Request) {
	var req struct {
		PlayerID int64  `json:"player_id"`
		UID      string `json:"uid"`
	}
	if !decodeJSON(w, r, &req) {
		return
	}

	count, err := h.service.CleanupPlayerSaves(r.Context(), req.PlayerID, req.UID)
	if err != nil {
		Fail(w, http.StatusBadRequest, err.Error())
		return
	}
	OK(w, "存档清理成功", map[string]int64{"deleted": count})
}

func (h *Handler) transferPlayer(w http.ResponseWriter, r *http.Request) {
	var req struct {
		PlayerID int64  `json:"player_id"`
		NewUID   string `json:"new_uid"`
	}
	if !decodeJSON(w, r, &req) {
		return
	}

	player, err := h.service.TransferPlayer(r.Context(), r.Header.Get("X-Admin-Key"), h.adminKey, req.PlayerID, req.NewUID)
	if err != nil {
		Fail(w, http.StatusUnauthorized, err.Error())
		return
	}
	OK(w, "账号转移成功", player)
}

func decodeJSON(w http.ResponseWriter, r *http.Request, target any) bool {
	defer r.Body.Close()
	decoder := json.NewDecoder(http.MaxBytesReader(w, r.Body, 20<<20))
	decoder.DisallowUnknownFields()
	if err := decoder.Decode(target); err != nil {
		Fail(w, http.StatusBadRequest, "请求JSON无效")
		return false
	}
	return true
}

func parseInt64(value string) (int64, error) {
	return strconv.ParseInt(strings.TrimSpace(value), 10, 64)
}
