function fn(){}
console.log(fn.name);//fn
console.log((function(){}).name);//""

//特殊情况
//1.通过bind方法得到一个新的函数 name是"bound"加上原来函数的名字
let fn1=fn.bind(null);
console.log(fn1.name);

//2.通过构造函数方式 创建一个函数；

// new Function("形参","函数体")；名字都是anonymous匿名函数
// new Function("函数体")；
let fn2=new Function('x,y','console.log(x,y);return x+y');
console.log(fn2(10,100));
console.log(fn2.name);//anonymous 匿名函数

let str='[{"name":"珠峰"},{"age":100}]'

