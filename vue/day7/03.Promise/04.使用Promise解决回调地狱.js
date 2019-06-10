const fs=require('fs')

function getFileByPath(fpath){                                    
    return new Promise(function(resolve,reject){            
    fs.readFile(fpath,'utf-8',(err,dataStr)=>{
      
        if(err) return reject(err)
        resolve(dataStr)  

        })
    })                                                
}


//先读取文件1，在读取2，最后读取3
//注意:通过.then指定回调函数的时候，成功的回调函数必须传，失败的回调可以省略不传
//这是一个错误的示范
// getFileByPath('./files/1.txt')
// .then(function(data){
//     console.log(data);
//     getFileByPath('./files/2.txt')
// .then(function(data){
//     console.log(data);   
//     getFileByPath('./files/3.txt')
// .then(function(data){
//     console.log(data);    
// }) 
// })  
// })



//读取文件1
//在上个.then中返回一个新的promise实例可以继续用下一个.then来处理


//如果前面的Promise执行失败，我们不想让后续的Promise操作被终止,可以为每个指定失败的回调
// getFileByPath('./files/11.txt')
// .then(function(data){
//     console.log(data);  
    
//     //读取文件2
//     return getFileByPath('./files/2.txt')
// },function(err){
//     console.log('这是失败的结果:'+err.message);
//     //return 一个新的Promise 不会耽误后续的.then操作
//     return getFileByPath('./files/2.txt')    
// })
//     .then(function(data){
//         console.log(data);
        
//      return   getFileByPath('./files/3.txt')
//     })
//         .then(function(data){
//             console.log(data);            
//         })

// console.log('okokok');
        

//当我们有这样的需求:哪怕前面的Promise执行失败了，但是不要影响后续的promise的正常执行，此时我们可以单独为每个promise通过.then指定一下失败的回调

//有时候我们有这样的需求，和上面的需求刚好相反：如果后续的Promise执行依赖于前面的Promise执行的结果，如果前面的失败了，则后面的就没有继续执行下去的意义了，此时我们想要实现一旦有报错则立即终止所有的Promise执行

getFileByPath('./files/1.txt')
.then(function(data){
    console.log(data);  
    
    //读取文件2
    return getFileByPath('./files/22.txt')
})
    .then(function(data){
        console.log(data);
        
     return   getFileByPath('./files/3.txt')
    })
        .then(function(data){
            console.log(data);            
        })
    .catch(function(err){//catch的作用:如果前面有任何的Promise执行失败，则立即终止所有promise执行，并马上进入catch去处理Promise中抛出的异常
        console.log('这是自己的处理方式'+err.message);        
    })