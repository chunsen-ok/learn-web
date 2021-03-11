package router

import (
	"net/http"
	"play-web/resp"

	"github.com/gin-gonic/gin"
)

type Router = func(c *gin.Context) (int, interface{}, error)

func Route(r Router) gin.HandlerFunc {
	return func(c *gin.Context) {
		code, data, err := r(c)
		c.JSON(http.StatusOK, resp.Response{Code: code, Data: data, Err: err})
	}
}
