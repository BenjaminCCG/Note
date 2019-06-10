//箭头函数是匿名函数

//假如函数体只有一行代码return 可以省略{}和return
//形参只有一个可以省略括号
// 语法 let fn=(形参)=>{函数体}
// let fn=x=>x+1;
// let fn=x=>{return x+1}
//通常函数当做参数的时候使用箭头函数

let ary=["珠峰",1,2,3]
console.log(ary.filter(item=>typeof item ==='number'))//[1,2,3]
//注意箭头函数几个特点
//1.箭头函数没有this指向 里面的this是上一级作用域下的this
let obj={
    fn:function(){
        let f=()=>{
            console.log(this);
            
        }
        f()
    }
}
obj.fn()

//2.箭头函数没有arguments
let f1=()=>{
    console.log(arguments);
    
}
f1()

//3.箭头函数不可以用作构造函数，因为不可以使用new执行
function FF(){}
new FF;
let F=()=>{};
// console.log(new F);
