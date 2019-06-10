//对目标对象默认操作拦截 /改写
//new Proxy({目标对象target},{拦截的方法})
let obj={name:"珠峰",age:"10"}
//让当前proxy1代理了obj  需要通过proxy1 去操作代理的obj
 let proxy1=new Proxy(obj,{
     get(target,key,proxy){
         //target:目标对象
         //key:属性名
         //proxy:实例      
        console.log("get拦截");
        //这里return什么  获取的就是什么 否则undefined
        return target[key]
     }
 })
  //get方法 只要是获取 例如:proxy1.name  就会触发get
  console.log(proxy1.name);
  