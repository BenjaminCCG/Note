var http=require('http')
var fs=require('fs')
var server=http.createServer((req,res)=>{
        if(req.url=="/b.html"){
            fs.readFile("./data/b.html",function(err,data){
                res.end(data)
            })
        }else if(req.url=="/css.css"){
            fs.readFile("./data/css.css",function(err,data){
                res.end(data)
            })
        }else if(req.url=="/0.jpg"){
            fs.readFile("./data/0.jpg",function(err,data){
                res.end(data)
            })
        }else{
            res.end('没有这个页面')
        }
}).listen(3000,function(){
    console.log('Server start at 3000 port');    
})