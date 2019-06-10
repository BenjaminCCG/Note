var http=require('http')
var fs=require('fs');

var server =http.createServer()

var wwwDir='D:/DTLFolder/www'

server.on('request',function(req,res){
    var url=req.url
    fs.readFile('./template.html',function(err,data){
        if(err){
            return res.end('404 Not Found')
        }
        //1.如何得到wwwDir目录列表中的文件名和目录名
        //   fs.readdir
        //2.如何将得到的文件名和目录名替换到template.html中
        //        2.1 在template.html中需要替换的位置预留一个特殊的标记
        //        2.2根据files生成需要的HTML内容
        //  模板引擎
        fs.readdir(wwwDir,function(err,files){
            if(err){
                return res.end('can not find files')
            }
            //2.1生成需要替换的内容
            var content=''
            files.forEach(function(item){
                content+=`<tr> <td><a href=''>${item}</a></td></tr>`
            })
            data=data.toString();
            data=data.replace('^_^',content)
            // console.log(data);
            
            res.end(data)
        })
       

        
    })
})

server.listen(3000,function(){
    console.log('running');    
})