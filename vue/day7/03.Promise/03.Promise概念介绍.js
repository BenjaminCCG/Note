// Promise 是一个构造函数,既然是构造函数,那么我们就可以 new Promise() 得到一个 Promise 的实例;

// 在 Promise 上有两个函数,分别叫做 resolve (成功之后的回调函数) 和 reject (失败之后的回调函数)

// 在 Promise 构造函数的 Prototype 属性上有一个 .then() 方法,也就是说只要是 Promise 构造函数创建的实例,都可以访问到 .then() 方法

// Promise 表示一个异步操作,每当我们 new 一个 Promise 的实例,这个实例就表示一个具体的异步操作;

// 既然 Promise 创建的实例试一个异步操作,那么这个异步操作的结果只能有两种状态:
// 状态1:异步执行成功,需要在内部调用成功的回调函数 resolve 把结果返回给调用者
// 状态2:异步操作失败,需要在内部调用失败的回调函数 reject 把结果返回给调用者
// 由于 Promise 的实例是一个异步操作,所以内部拿到的操作的结果后,无法使用 return 把操作结果返回给调用者,这时候只能使用回调函数的形式来把成功或者失败的结果返回给调用者

// 我们可以在 new 出来的 Promise 实例上调用 .then() 方法,[预先]为这个 Promise 异步操作指定成功 (resolve) 和失败 (reject) 回调函数

// 注意:这里 new 出来的 promise 只是代表[形式上]的一个异步操作
// 什么是形式上的异步操作:就是说,我们只知道它是一个异步操作,但是做什么具体的异步事件目前还不清楚
// const promise = new Promise();

// 这是一个具体的异步操作,其中使用 function 指定一个具体的异步操作
// const promise = new Promise(function() {
//     // 这个 function 内部写的就是具体的异步操作!!!
// });


const fs=require('fs')

//每当new一个Promise实例的时候，就会立即执行这个异步操作中的代码
//也就是说new的时候，除了能够得到一个Promise十里之外，还会立即调用我们为Promise构造函数传递的那个function，执行这个function中的异步操作代码
// const promise=new Promise(function(){
//     fs.readFile('./files/2.txt','utf-8',(err,dataStr)=>{
//         if(err) throw err
//         console.log(dataStr);        
//     })
// })


//初衷:给路径返回读取到的内容
function getFileByPath(fpath){                                      //1
    return new Promise(function(resolve,reject){             //3.
    fs.readFile(fpath,'utf-8',(err,dataStr)=>{
      
        if(err) return reject(err)
        resolve(dataStr)  

        })
    })                                                //4
}


getFileByPath('./files/2.txt')
.then(function(dataStr){                                            //2.
    console.log(dataStr+"------");    
},function(err){
    console.log(err.message);    
})                                 //5.
