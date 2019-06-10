//Promise.race([p1,p2,p3])
//只要有一个状态改变 当前实例的状态就改变

let p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("珠峰")
    },5000)
    // reject("p1Error")
    
});

let p2=new Promise((resolve,reject)=>{
    // resolve("JS")
    // reject("p2Error")
    setTimeout(()=>{
        resolve("JS")
    },2000)
});

let p3=new Promise((resolve,reject)=>{
    
    setTimeout(()=>{
        resolve("VUE");
    },5000)
});
Promise.race([p1,p2,p3]).then((res)=>{
    console.log(res);
    
}).catch((e)=>{
    console.log(e);
    
})
