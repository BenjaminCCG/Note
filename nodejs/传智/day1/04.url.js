var http=require('http')
var url=require('url')


http.createServer(function(req,res){
    //得到查询部分，由于写了true，那么就是一个对象
    res.writeHead(200,{"Content-type":"text/html;charset=utf-8"})
    var queryObj=url.parse(req.url,true).query
    var name=queryObj.name
    var age=queryObj.age
    var sex=queryObj.sex;

    res.end('服务器收到了表单请求'+name+age+sex)    
}).listen(3000)

