package main

import (
	"github.com/unleash-toggle-backend/go-service/config"
	"github.com/unleash-toggle-backend/go-service/router"
)

func main() {
	r := router.SetupRouter()

	config.Unleash()

	r.Run(":4321")
}
