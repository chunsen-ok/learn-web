package resp

type Response struct {
	Code int         `json:"code"`
	Data interface{} `json:"data"`
	Err  error       `json:"err"`
}
