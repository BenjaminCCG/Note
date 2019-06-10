var http=require('http')
var fs=require('fs')
var url=require('url')
var path=require('path')
var queryString=require("querystring")
var mime={
    ".jpg":"image/jpeg"
}
var server=http.createServer((req,res)=>{
        //得到用户读取什么
        var pathname=url.parse(req.url).pathname
        var extname=path.extname(pathname)
        //如果url中不存在拓展名，此时表示这是一个文件夹，此时自动补全/index.html
        if(!extname){
            pathname+="/index.html"
        }
        
        fs.readFile("./myweb/"+pathname,function(err,data){
                if(err){
                    res.end("没有这个文件 ")
                }else{
                    res.end(data)
                }
        })
        if(mime.hasOwnProperty(extname)){
           res.setHeader('Content-Type',mime[extname])
        }
}).listen(3000,function(){
    console.log('Server start at 3000 port');    
})


//问题:content-type