//1.JS作用域问题一
// ①
// console.log(a);//undefined
// var a=1

//2.
// console.log(a);
// a=1  报错

// 变量名与函数名冲突，保留函数
//函数名与函数名冲突 保留后面的函数
//3.
// console.log(a);
// var a=1;
// console.log(a);
// function a(){
//     console.log(2);    
// }
// console.log(a);
// var a=2
// console.log(a);
// function a(){
//     console.log(4);    
// }
// console.log(a);
// a()
// 预解析
//function a(){console.log(4)} 当最后一个函数被解析后，前面的函数将不再读取

//1.
// var a=1;
// function fn(){
//     console.log(a);
//     var a=2;    
// }
// fn();
// console.log(a);

// 2.
// var a=1;
// function fn(){
//     console.log(a);
//     a=2;    
// }
// fn();
// console.log(a);


// 3.
// var a=1;
// function fn(a){
//     console.log(a);
//     a=2;    
// }
// fn();
// console.log(a);


// 4.
// var a=1;
// function fn(a){
//     console.log(a);
//     a=2;    
// }
// fn(a);
// console.log(a);