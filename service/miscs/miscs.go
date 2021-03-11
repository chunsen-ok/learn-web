package miscs

import (
	"play-web/service/internal/router"
	"time"

	"github.com/gin-gonic/gin"
)

func Init(r gin.IRouter) {
	g := r.Group("/miscs")
	g.GET("/now", router.Route(currentTime))
}

func currentTime(c *gin.Context) (int, interface{}, error) {
	t := time.Now().Format("2006-01-02 15:04:05")
	return 0, t, nil
}
