var http=require('http')
var fs=require('fs')

var server=http.createServer(function(req,res){
    if(req.url=="/favicon.ico"){
        return
    }
    var userid=parseInt(Math.random()*89999)+10000;
    console.log("欢迎"+userid);
    
    res.writeHead(200,{"Content-Type":"text/plain;charset=utf-8"})
    //两个参数:第一个是完整路径
    //第二个参数是回调函数，表示文件读取成功之后，做的事情
    fs.readFile('./data/1.txt',function(err,data){
        if(err){
            throw err;
        }
        console.log(userid+"文件读取完毕");
        
        res.end(data)
    })
}).listen(3000)