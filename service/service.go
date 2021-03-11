package service

import (
	"play-web/service/miscs"

	"github.com/gin-gonic/gin"
)

func Init(r gin.IRouter) {
	g := r.Group("/api/v1")
	miscs.Init(g)
}
