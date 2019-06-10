// console.dir(Promise);

//all
// Promise.all([每一项都是Promise对象，如果不是默认转为Promise])
//数组中每一项都是成功 才会走成功回调 默认将每一项的参数放在一个数组中传给回调函数
//只要一个有错误，就会走错误的回调，将第一个错误参数传给回调
let p1=new Promise((resolve,reject)=>{
    resolve("珠峰")
});

let p2=new Promise((resolve,reject)=>{
    // resolve("JS")
    reject("p2Error")
});

let p3=new Promise((resolve,reject)=>{
    resolve("VUE")
});

let pAll=Promise.all([p1,p2,p3]);
// console.log(pAll);

pAll.then((res)=>{
    console.log(res);    
}).catch((e)=>{
    console.log(e);
    
})


