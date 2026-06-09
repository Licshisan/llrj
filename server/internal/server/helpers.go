package server

import (
	"encoding/json"
	"log"
	"math"
	mathrand "math/rand"
	"net/http"
	"strconv"
	"strings"
)

func readJSON(w http.ResponseWriter, r *http.Request, dst any) bool {
	defer r.Body.Close()
	decoder := json.NewDecoder(r.Body)
	decoder.UseNumber()
	if err := decoder.Decode(dst); err != nil {
		writeError(w, http.StatusBadRequest, "invalid json")
		return false
	}
	return true
}

func writeJSON(w http.ResponseWriter, status int, value any) {
	w.WriteHeader(status)
	if err := json.NewEncoder(w).Encode(value); err != nil {
		log.Printf("write response: %v", err)
	}
}

func writeError(w http.ResponseWriter, status int, message string) {
	writeJSON(w, status, map[string]string{"error": message})
}

func int64Query(w http.ResponseWriter, r *http.Request, name string) (int64, bool) {
	raw := strings.TrimSpace(r.URL.Query().Get(name))
	value, err := strconv.ParseInt(raw, 10, 64)
	if raw == "" || err != nil {
		writeError(w, http.StatusBadRequest, name+" is required")
		return 0, false
	}
	return value, true
}

func intQuery(w http.ResponseWriter, r *http.Request, name string) (int, bool) {
	raw := strings.TrimSpace(r.URL.Query().Get(name))
	value, err := strconv.Atoi(raw)
	if raw == "" || err != nil {
		writeError(w, http.StatusBadRequest, name+" is required")
		return 0, false
	}
	return value, true
}

func playerNameFromClientInfo(clientInfo map[string]any) string {
	name := strings.TrimSpace(stringValue(clientInfo["name"]))
	if name == "" {
		return "unknown player"
	}
	return name
}

func scoreFromClientInfo(clientInfo map[string]any) float64 {
	return numberValue(clientInfo["scores"])
}

func collectionScoreFromClientInfo(clientInfo map[string]any) float64 {
	collections, ok := clientInfo["collections"].(map[string]any)
	if !ok {
		return 0
	}

	var total float64
	for _, value := range collections {
		total += numberValue(value)
	}
	return total
}

func sortLeaderboard(entries []leaderboardEntry) {
	for i := 1; i < len(entries); i++ {
		current := entries[i]
		j := i - 1
		for j >= 0 && leaderboardLess(current, entries[j]) {
			entries[j+1] = entries[j]
			j--
		}
		entries[j+1] = current
	}
}

func leaderboardLess(a, b leaderboardEntry) bool {
	if a.Score != b.Score {
		return a.Score > b.Score
	}
	return a.PlayerID < b.PlayerID
}

func stringValue(value any) string {
	switch v := value.(type) {
	case string:
		return v
	case json.Number:
		return v.String()
	case float64:
		if math.Trunc(v) == v {
			return strconv.FormatInt(int64(v), 10)
		}
		return strconv.FormatFloat(v, 'f', -1, 64)
	case int:
		return strconv.Itoa(v)
	case int64:
		return strconv.FormatInt(v, 10)
	default:
		return ""
	}
}

func numberValue(value any) float64 {
	switch v := value.(type) {
	case json.Number:
		n, err := v.Float64()
		if err != nil {
			return 0
		}
		return n
	case float64:
		return v
	case float32:
		return float64(v)
	case int:
		return float64(v)
	case int64:
		return float64(v)
	case string:
		n, err := strconv.ParseFloat(strings.TrimSpace(v), 64)
		if err != nil {
			return 0
		}
		return n
	default:
		return 0
	}
}

func randomPlayerName() string {
	adjectives := []string{
		"呆萌", "勇敢", "调皮", "温柔", "疯狂",
		"慵懒", "帅气", "神秘", "暴躁", "可爱",
		"潇洒", "憨厚", "傲娇", "勇猛", "佛系",
		"沙雕", "冷酷", "阳光", "忧郁", "无敌",
		"呆萌", "沙雕", "emo", "纯爱", "鸡你太美",
		"慵懒", "神秘", "暴躁", "傲娇", "佛系",
		"摆烂", "热血", "腹黑", "蠢萌", "猥琐",
		"邪恶", "卑鄙", "风骚", "逗比", "传奇",
		"拼命", "平衡", "懵逼", "划水", "单身",
		"喵喵", "咩咩", "咕咕", "嘎嘎", "嗷呜",
	}
	roles := []string{
		"小蚊", "小小兔", "小小蛇", "小青", "蚊媛", "巨蟒",
		"蚊乐队", "小混混", "丐帮弟子", "恶霸", "女警", "煤老板", "城管",
		"皮皮猴", "野猪", "药贩", "流浪剑客", "黑熊", "果树", "火狐", "山岭巨人",
		"熊孩子", "阿宾", "卖片老板", "阿龙", "站街妹",
		"金环蛇", "铃女", "流浪大叔", "古树", "再生虫",
		"喵妹", "高级金融分析师", "胖虎", "龙啸天", "排球少女",
		"流浪汉", "女贼", "西装男", "醉汉", "刀疤男",
		"看守者", "追杀者", "劫匪", "通缉犯",
		"草带男孩", "女流氓", "女汉子", "壮汉",
		"电锯男", "蒙面人", "流浪者", "萌新", "菜菜", "咸鱼",
		"地瓜", "果子", "伤药", "熟肉", "生肉", "啤酒", "小男孩",
	}

	return adjectives[mathrand.Intn(len(adjectives))] + "的" + roles[mathrand.Intn(len(roles))]
}
