package server

import "github.com/jackc/pgx/v5/pgxpool"

type App struct {
	db    *pgxpool.Pool
	cache *cacheStore
}

func New(db *pgxpool.Pool) *App {
	return &App{
		db:    db,
		cache: newCacheStore(),
	}
}
