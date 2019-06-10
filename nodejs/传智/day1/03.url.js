var http=require('http')
var url=require('url')


http.createServer(function(req,res){
    //url.parse()可以将一个完整的url地址分为很多部分
    var path=url.parse(req.url).pathname
    //url.parse()如果第二个参数是true，那么就可以将所有的查询变为对象
    //就可以直接打点得到这个参数
    var query=url.parse(req.url,true).query
    var age=query.age
    console.log(age);
    res.end()    
}).listen(3000)

