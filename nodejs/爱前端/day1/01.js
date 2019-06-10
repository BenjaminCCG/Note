//路由清单

var http=require('http')


var server=http.createServer((req,res)=>{
    res.end('ok')
    if(req.url=='/'){
        res.end('首页')
    }else if(req.url=='/music'){
        res.end('音乐频道')
    }
})
server.listen(3000,function(){
    console.log("服务器已经运行了");    
})