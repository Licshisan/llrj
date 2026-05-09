CREATE TABLE IF NOT EXISTS player (
  id BIGSERIAL PRIMARY KEY,
  uid TEXT NOT NULL UNIQUE,
  nickname TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  login_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  setting JSONB NOT NULL DEFAULT '{}'::jsonb,
  achivement JSONB NOT NULL DEFAULT '{}'::jsonb
);

CREATE TABLE IF NOT EXISTS saves (
  id BIGSERIAL PRIMARY KEY,
  player_id BIGINT NOT NULL REFERENCES player(id) ON DELETE CASCADE,
  save_id TEXT NOT NULL,
  day INTEGER NOT NULL DEFAULT 0,
  save JSONB NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_saves_player_id ON saves(player_id);
CREATE INDEX IF NOT EXISTS idx_saves_day_created_at ON saves(day, created_at DESC);

CREATE TABLE IF NOT EXISTS errors (
  id BIGSERIAL PRIMARY KEY,
  player_id BIGINT REFERENCES player(id) ON DELETE SET NULL,
  name TEXT,
  line INTEGER,
  msg TEXT,
  stack TEXT,
  setting JSONB,
  payload JSONB NOT NULL DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_errors_created_at ON errors(created_at DESC);

CREATE TABLE IF NOT EXISTS messages (
  id BIGSERIAL PRIMARY KEY,
  msg JSONB NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_messages_created_at ON messages(created_at DESC);
