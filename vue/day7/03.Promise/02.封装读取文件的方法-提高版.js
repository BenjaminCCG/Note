//需求：你要封装一个方法，我给你一个要读取文件的路径，你这个方法能帮我读取文件，并把内容返回给我

const fs=require('fs')

const path=require('path')

function getFilesByPath(fpath,succCb,errCb){
    fs.readFile(fpath,'utf-8',(err,dataStr)=>{        
        if(err) return  errCb(err)       
        succCb(dataStr)   
    })
}

// getFilesByPath(path.join(__dirname,'./files/1.txt'),function(data){
//     console.log(data+"娃哈哈，成功了");    
// },function(err){
//     console.log("失败的结果我们使用失败的回调处理一下:"+err.message);    
// })

//需求:先读取文件1，取读取文件2，最后在读取文件3

//回调地狱
//使用ES6中的Promise来解决回调地狱的问题
//问:Promise出来的本质是要干什么的:就是单纯的为了解决回调地狱问题；并不能帮我们减少代码量
getFilesByPath(path.join(__dirname,'./files/1.txt'),function(data){
    console.log(data);
    getFilesByPath(path.join(__dirname,'./files/2.txt'),function(data){
        console.log(data);    
    })
    getFilesByPath(path.join(__dirname,'./files/3.txt'),function(data){
        console.log(data);    
    })    
})