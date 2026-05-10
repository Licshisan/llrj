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
- 自动清理：删除 `created_at` 超过 `SAVE_RETENTION_DAYS` 天的旧存档，默认 30 天

## 数据表

- `players`：玩家账号，包含 `id`、`uid`、`name`、`ext_info`
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

### 重命名

```bash
curl -X POST http://localhost:3000/rename \
  -H "Content-Type: application/json" \
  -d "{\"player_id\":1,\"uid\":\"device-001\",\"name\":\"新的名字\"}"
```

### 上传玩家扩展信息

```bash
curl -X POST http://localhost:3000/ext-info \
  -H "Content-Type: application/json" \
  -d "{\"player_id\":1,\"uid\":\"device-001\",\"ext_info\":{\"战胜语\":\"赢了\"}}"
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

按 `players.ext_info` 中的 `积分` 字段从高到低排名，返回前 50 名和当前玩家自己的排名；响应中不包含 `uid`。

```bash
curl "http://localhost:3000/ranking?player_id=1&uid=device-001"
```

### 藏品排行榜

按 `players.ext_info` 中 `藏品` 对象所有数字值之和从高到低排名，返回前 50 名和当前玩家自己的排名；响应中不包含 `uid`。

```bash
curl "http://localhost:3000/collection-ranking?player_id=1&uid=device-001"
```

### 清理当前玩家存档

```bash
curl -X POST http://localhost:3000/save/cleanup \
  -H "Content-Type: application/json" \
  -d "{\"player_id\":1,\"uid\":\"device-001\"}"
```

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

### 管理员账号转移

客户端不使用该接口。管理员可传 `X-Admin-Key` 将玩家绑定到新 `uid`。

```bash
curl -X POST http://localhost:3000/admin/player/transfer \
  -H "Content-Type: application/json" \
  -H "X-Admin-Key: change-me" \
  -d "{\"player_id\":1,\"new_uid\":\"device-002\"}"
```

## 后续计划

- 排行榜系统
- 远程获取版本更新
- 远程公告
- 远程同步存档
- Cocos Creator 3.x APK 热更新方案调研
