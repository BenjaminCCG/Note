//1.函数参数的默认值
// function add(a,b=999+a,c=1){//此处b不可以为999+c
//     console.log(a,b);    
// }
// add(1)

// function People({name,age=38}={}){
//     console.log(name,age);
    
// }
// People()

//2.结合扩展运算符(剩余参数...)
// function sum(...args){
//     // console.log(arguments);
//     // let args=[...arguments] 
//     console.log(args);
       
// }
// sum(1,2,4354,'fased')

// //箭头函数
// const add=(a,b)=>a+b;
// const add2=function(a,b){
//     return a+b
// }

// console.log(add(2,2));
// console.log(add2(2,2));



// const pop=arr=> void arr.pop()// void 使函数返回undefined
// console.log(pop([1,2,3]));

//与普通函数区别
//1.箭头函数没有arguments
const log=(...args)=>{
    // console.log(arguments);  
    console.log(args);  
}
log(1,2,3)


//2.箭头函数没有自己的this
const xiaoming={
    name:'小明',
    say1:function(){
        console.log(this);        
    },
    say2:()=>{
        console.log(this);        
    }
}
xiaoming.say1();
xiaoming.say2()
