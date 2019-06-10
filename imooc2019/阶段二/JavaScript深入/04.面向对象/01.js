//构造函数对象:函数构造器创建函数对象
// var obj=new Function()

// function f1(){
//     var n=999
// }
// f1()
// console.log(n);//无法访问局部变量

//此时通过闭包
function a(){
    var i=1;
    return function b(){         
         return i
    }
}
var c=a();
console.log(c());

//闭包的优缺点
//优点:有利于封装，可以访问局部变量
//缺点:内存占用浪费严重，内存泄漏




