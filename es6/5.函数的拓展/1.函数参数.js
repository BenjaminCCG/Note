//参数默认值
function fn(x="珠峰",y="Es6"){
    
}

//参数使用解构赋值
function fn1({name='珠峰',age='100'}={}){
    //{name="珠峰",age="100"}={}
    console.log(name,age);
    
}
fn1()

//length 属性 ,形参的个数，如果形参有默认值情况，length就会失真 变成没有默认值形参的个数
function fn2(x,y=10){

}
fn2(1,2)
console.log(fn2.length);

//参数默认值位置:一般需要设置默认值参数的默认值放在最后面
function fn3(x=10,y=20){

}
// fn3(,1)会报错

//arguments 类数组  实参集合
function fn4(...arg){
    console.log(arguments);
    console.log(arg);
    
}
fn4(1,2,3,4,5)


//参数作用域问题
//函数执行的时候先给形参赋值 形参也是私有变量 如果给形参的默认值是一个变量
//先看是不是自己的私有变量，不是自己的再找全局中是否有这个变量没有就报错
let m=10,n=100;
function fn5(x=m,y=n){//此时mn是全局变量mn的值
    //私有作用域:私有变量 x,y,m,n
    console.log(x);
    console.log(y);    
    let m="珠峰";
    let n="ES6"
}
fn5()

let x=100;
function fn6(x,y=x){
//X=1,y=1
console.log(x,y);

}
fn6(1)