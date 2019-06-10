// debugger   调试器，运行到这暂定代码

var sum=0;


for(var i=0;i<10;i++){
   sum+=i
}
console.log(sum);

// throw  new Error()抛出错误语句
//如果内部代码抛出错误，则带码直接跳入catch块运行，且把错误对象赋值给catch括号内的对象
try{
    addalert('我的天啊')
}catch(e){
    console.log(e.message);
    
}finally{
    console.log("我必执行");
        //一定会执行的
}