var http=require('http')
var fs=require('fs')
var url=require('url')
var path=require('path')
var queryString=require("querystring")
var server=http.createServer((req,res)=>{
        //转为对象
        var urljson=url.parse(req.url,true)
        //得到文件路径
        var pathname=urljson.pathname
        var query=urljson.query
        //extname获取拓展名
        var extname=path.extname(pathname)

        var qs=urljson.query
        var qujson=querystring.parse(qs)

        // console.log(urljson+'\n'+pathname);
        // console.log(query);
        // console.log(extname);
        console.log(qujson);
        
        res.end()
        
}).listen(3000,function(){
    console.log('Server start at 3000 port');    
})

// querystring属于req.url,但是hash不属于
