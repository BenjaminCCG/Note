//块级作用域；
//一个{}就是块级作用域;
//块级作用域下var和function声明的变量依然是全局的；
//块级作用域下let和const声明的变量是局部变量
{
    var a=0;
    function getA(){
        console.log('geta')
    }
    let b=1;
    const c=1
}
console.log(a); //0
getA()
console.log(b);// b is not defined
console.log(c);// c is not defined

//for{},if{},对象{}有块级作用域
//{name:'珠峰',age:10}//此时会被当成块级作用域
//{}如果想表示一个对象，{}不可以放在行首;可以加上小括号，或者赋值给变量;
({name:'珠峰',age:10});
let ff={name:'珠峰',age:10};

//if(){}  中的函数只会提前声明，不会定义，当条件成立；
//先给函数赋值，然后代码在执行
// if(){}

for(var i=0;i<list.length;i++){
    list[i].index=i;//将索引值存储到一个属性中；
    list[i].onclick=function(){
        alert(i)//此时的I是for循环结束后的值，并不是当前索引
    }//用var声明的i是全局变量
}

