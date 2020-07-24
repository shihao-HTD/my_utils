/*
   1. 函数的返回值为 Promise, 成功的结果为 response, 异常的结果为 error
   2. 能处理多种类型的请求: GET/POST/PUT/DELETE
   3. 函数的参数为一个配置对象
   {
   url: '', // 请求地址
   method: '', // 请求方式 GET/POST/PUT/DELETE
   params: {}, // GET/DELETE 请求的 query 参数
   data: {}, // POST 或 DELETE 请求的请求体参数
   }
   4. 响应 json 数据自动解析为 js
*/
function axios({ method = "GET", url, params, data }) {
  method = method.toUpperCase()
  if (params) {
    let queryString = ""
    Object.keys(params).forEach((key) => {
      queryString += `${key}=${params[key]}$`
    })
    // 去掉最后一个&
    queryString = queryString.substring(0, queryString.length - 1)
    url += "?" + queryString
  }
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest()
    request.open(method, url, true)
    if (method === "GET" || method === "DELETE") {
      request.send()
    } else if (method === "POST" || method === "PUT") {
      request.setRequestHeader("Content-Type", "application/json;charset=utf-8")
      request.send(JSON.stringify(data))
    }
    request.onreadystatechange = function () {
      if (this.readyState !== 4) {
        return
      }
      const { status, statusText, response } = this
      if (status >= 200 && status <= 299) {
        resolve({
          data: JSON.parse(response),
          status,
          statusText,
        })
      } else {
        reject(new Error("request error status is" + status))
      }
    }
  })
}
export default axios
