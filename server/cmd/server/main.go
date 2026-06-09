package main

import (
	"context"
	"log"
	"net/http"

	"game-server/internal/config"
	"game-server/internal/migrate"
	"game-server/internal/server"

	"github.com/jackc/pgx/v5/pgxpool"
)

func main() {
	cfg, err := config.Load()
	if err != nil {
		log.Fatal(err)
	}

	ctx := context.Background()
	db, err := pgxpool.New(ctx, cfg.DatabaseURL)
	if err != nil {
		log.Fatalf("connect database: %v", err)
	}
	defer db.Close()

	if err := db.Ping(ctx); err != nil {
		log.Fatalf("ping database: %v", err)
	}
	if err := migrate.Run(ctx, db, "migrations"); err != nil {
		log.Fatalf("run migrations: %v", err)
	}

	app := server.New(db)
	log.Printf("listening on :%s", cfg.Port)
	log.Fatal(http.ListenAndServe(":"+cfg.Port, app.Routes()))
}
