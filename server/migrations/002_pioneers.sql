CREATE TABLE IF NOT EXISTS pioneers (
  achievement_name TEXT PRIMARY KEY,
  completed_at JSONB NOT NULL DEFAULT 'null'::jsonb,
  player_id BIGINT NOT NULL REFERENCES players(id) ON DELETE CASCADE,
  player_name TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE pioneers DROP COLUMN IF EXISTS description;

CREATE INDEX IF NOT EXISTS idx_pioneers_created_at ON pioneers(created_at DESC);
