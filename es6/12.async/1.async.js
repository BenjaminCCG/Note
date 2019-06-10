//默认返回一个Promise对象
async function getA(){
    // return 出的内容就是成功回调的参数
    //这里有错误就会被catch捕获
    throw new Error("对不起")
    return "珠峰"
}
getA().then(res=>{
    console.log(res);
    
}).catch(e=>{
    console.log(e);
    
})