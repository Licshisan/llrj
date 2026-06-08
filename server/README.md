# LLRJ Go Backend

小游戏后端服务，使用 Go + PostgreSQL。当前版本只提供玩家、存档、随机存档、日志和管理员账号转移基础能力。

## 启动

```bash
cd server
cp .env.example .env
go mod tidy
go run ./cmd/api
```

如果本机没有 PostgreSQL，可以先用 Docker 启动一个本地数据库：

```bash
cd server
docker compose up -d
go run ./cmd/api
```

默认配置：

- 服务端口：`3000`
- 数据库：`postgres://postgres:postgres@localhost:5432/llrj?sslmode=disable`
- 自动建表：`AUTO_MIGRATE=true`

## 数据表

- `players`：玩家账号，包含 `id`、`uid`、`client_info`
- `saves`：玩家存档，包含 `day`、`save_name`、`save`
- `logs`：日志上报，支持无玩家日志和已校验玩家日志

## API

成功响应：

```json
{ "code": 200, "msg": "成功信息", "data": {} }
```

失败响应：

```json
{ "code": 400, "msg": "错误信息" }
```

除 `/login` 外，玩家相关接口都需要传 `player_id` 和 `uid`，后端会校验二者是否匹配。

### 登录

```bash
curl -X POST http://localhost:3000/login \
  -H "Content-Type: application/json" \
  -d "{\"uid\":\"device-001\"}"
```

### 上传玩家客户端信息

```bash
curl -X POST http://localhost:3000/client-info \
  -H "Content-Type: application/json" \
  -d "{\"player_id\":1,\"uid\":\"device-001\",\"client_info\":{\"战胜语\":\"赢了\"}}"
```

如果 `client_info.成就` 是数组，服务端会自动扫描其中的成就对象，并将全服第一个完成某个成就的玩家登记到 `pioneers` 表。成就对象格式：

```json
{ "名称": "第一次通关", "描述": "完成一次游戏", "完成时间": 1710000000000 }
```
### 上传存档

```bash
curl -X POST http://localhost:3000/save \
  -H "Content-Type: application/json" \
  -d "{\"player_id\":1,\"uid\":\"device-001\",\"day\":3,\"save_name\":\"default\",\"save\":{\"hp\":100}}"
```

### 随机存档

```bash
curl "http://localhost:3000/random-save?player_id=1&uid=device-001&day=3"
```

随机存档不会返回请求玩家自己的存档。

### 排行榜

按 `players.client_info` 中的 `积分` 字段从高到低排名，返回前 50 名和当前玩家自己的排名；响应中不包含 `uid`。

```bash
curl "http://localhost:3000/ranking?player_id=1&uid=device-001"
```

### 藏品排行榜

按 `players.client_info` 中 `藏品` 对象所有数字值之和从高到低排名，返回前 50 名和当前玩家自己的排名；响应中不包含 `uid`。

```bash
curl "http://localhost:3000/collection-ranking?player_id=1&uid=device-001"
```

### 先驱者

返回当前已登记的开拓者信息，格式为 
`{ "成就名": "第一个完成人", "完成时间": 1710000000000, "完成人id": 1 }`。

### 日志上报

```bash
curl -X POST http://localhost:3000/log \
  -H "Content-Type: application/json" \
  -d "{\"level\":\"error\",\"log\":{\"msg\":\"something happened\"}}"
```

带玩家校验：

```bash
curl -X POST http://localhost:3000/log \
  -H "Content-Type: application/json" \
  -d "{\"player_id\":1,\"uid\":\"device-001\",\"level\":\"info\",\"log\":{\"event\":\"save_clicked\"}}"
```