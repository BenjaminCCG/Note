var http=require('http')
var fs=require('fs');

var server =http.createServer()

var wwwDir='D:/DTLFolder/www'

server.on('request',function(req,res){
    var url=req.url
    // /       index.html
    // /a.txt wwwDir+a.txt
    // /apple/login.html wwwDir+apple/login.html
    // /img/ab.png    wwwDir+img/ab.png
    var filePath='/index.html'
    if(url!=='/'){
        filePath=url
    }

    fs.readFile(wwwDir+filePath,function(err,data){
        if(err){
            return res.end('404 Not Found')
        }
        res.end(data)
    })
})

server.listen(3000,function(){
    console.log('running');    
})