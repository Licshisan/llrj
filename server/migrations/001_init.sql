CREATE TABLE IF NOT EXISTS players (
  id BIGSERIAL PRIMARY KEY,
  uid TEXT NOT NULL UNIQUE,
  client_info JSONB NOT NULL DEFAULT '{}'::jsonb,
  server_info JSONB NOT NULL DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS saves (
  id BIGSERIAL PRIMARY KEY,
  player_id BIGINT NOT NULL REFERENCES players(id) ON DELETE CASCADE,
  day INTEGER NOT NULL DEFAULT 0,
  save_name TEXT NOT NULL DEFAULT 'default',
  save_difficulty TEXT NOT NULL DEFAULT 'default',
  save JSONB NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS logs (
  id BIGSERIAL PRIMARY KEY,
  player_id BIGINT REFERENCES players(id) ON DELETE SET NULL,
  level TEXT NOT NULL DEFAULT 'info',
  log JSONB NOT NULL DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS pioneers (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL UNIQUE,
  description TEXT NOT NULL,
  player_id BIGINT NOT NULL REFERENCES players(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_saves_player_id ON saves(player_id);
CREATE INDEX IF NOT EXISTS idx_saves_day_created_at ON saves(day, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_logs_created_at ON logs(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_logs_player_id ON logs(player_id);
CREATE INDEX IF NOT EXISTS idx_pioneers_created_at ON pioneers(created_at DESC);