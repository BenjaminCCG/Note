var fs=require('fs')

fs.readdir('D:/DTLFolder/www',function(err,data){
    if(err){
        return console.log('目录不存在');        
    }
    console.log(data);
    
    
})