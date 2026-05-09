# LLRJ Backend

独立 Node.js + PostgreSQL 后端。

## 启动

```bash
cd backend
npm install
cp .env.example .env
npm run db:init
npm start
```

默认会在启动时建表，设置 `AUTO_INIT_DB=false` 可关闭自动建表。

## API

- `POST /login`
- `POST /player`
- `POST /save`
- `POST /error`
- `POST /message`
- `GET /ranking`
- `GET /random-save?day=1`

兼容旧客户端：

- `POST /msg`
- `POST /setting`
- `POST /nickname`
