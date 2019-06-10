//最初状态是pending
//执行顺序
//new Promise  中的函数=>当前队列中同步代码=>then中的回调
let pro1=new Promise((resolve,reject)=>{
    //resolve 函数
    //reject  函数
    //resolve和reject函数只能执行一个
    // let a=1;
    // let a=1;
    //如果这里面有错误，就会执行then中的第二个回调函数
    //会将错误信息传给函数
    console.log("promise");    
    resolve("success")//成功 fulfilled
    reject("error") //失败 rejected
})


pro1.then((res)=>{   
    //resolve 成功的回调
    console.log(res);
    
},(e)=>{
    //reject 失败的回调
    console.log(e);    
});
console.log("ok");
