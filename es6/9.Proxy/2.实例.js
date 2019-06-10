//1.set(target,propkey,value,receiver)
let obj={name:"珠峰"}
let proxy1=new Proxy(obj,{
    get(target,propkey,receiver){
        return target[propkey]
    },
    set(target,propkey,value,receiver){
        console.log("设置");
        //propkey:设置的属性名
        //value：设置的属性值
        target[propkey]=value;
        return true
    },
    has(target,propkey){
        console.log('has');
        if(propkey.startsWith("_")){
            return false
        }
        return propkey in target
    }
})
proxy1.age=10
console.log(proxy1);
console.log("name" in proxy1);

function getObj(){
    return {name:"珠峰"}
}
let proxy2=new Proxy(getObj,{
    apply(target,object,args){
        //函数直接执行()
        console.log(target);
        console.log(object);
        console.log(args);
        //args 函数执行的参数
        //object 给函数修改this的        
    }
})