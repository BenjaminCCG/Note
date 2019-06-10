//引用模块
var http=require('http')

//创建一个服务器，回调函数表示接受到请求之后做的事情
var server= http.createServer(function(req,res){
    //req表示请求，res表示响应
    console.log('服务器接收到了请求'+req.url); 
    // res.setHeader('Content-Type','text/html;charset=utf-8')
    res.writeHead(200,{"Content-type":"text/html;charset=utf-8"})
    res.end('<h1>大家好<h1>')
})

server.listen(3000)




