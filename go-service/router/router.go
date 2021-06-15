package router

import (
	"github.com/gin-gonic/gin"
	"github.com/unleash-toggle-backend/go-service/controller"
)

func SetupRouter() *gin.Engine {

	router := gin.Default()

	api := router.Group("/api")
	api.GET("ping", controller.Pong)

	return router
}
