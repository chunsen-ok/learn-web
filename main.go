package main

import (
	"play-web/service"

	"github.com/gin-gonic/gin"
)

func main() {
	engine := gin.Default()
	engine.Static("/web", "./web")
	engine.StaticFile("", "./web/index.html")
	service.Init(engine)

	engine.Run(":80")
}
