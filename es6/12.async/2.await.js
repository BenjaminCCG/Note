let p=new Promise((resolve,reject)=>{
    reject("sorry")
    resolve("珠峰")
})
async function getA(){
    //await 后面是一个promise实例 如果不是也会默认转为promise
    //直接让promise 实例的回调执行 返回执行时的参数
//    console.log( await p);
    //await 是一个语法糖 不用通过then就可以拿到resolve或者reject参数
        let a=await p;
        //等await 后面的异步完成之后再去执行后面的代码
        console.log(a);
        return a
        
}

getA().then(res=>{
    console.log(res);
    
}).catch(e=>{
    console.log(e);
    
})