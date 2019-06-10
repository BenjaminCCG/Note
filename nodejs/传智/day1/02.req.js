var http=require('http')

//req.url属性，表示用户请求的url路径

http.createServer(function(req,res){
    console.log(req.url);    
}).listen(3000)

//识别URL，用到两个新模块，第一个就是url模块，第二个就是querystring模块