// function Fn(){
//     this.x=10
// }
// Fn.prototype.getX=function(){}
// let f=new Fn();
// Fn()
class A{
    constructor(x){
        //类本身的函数
        //this:当前实例
        this.x=x//增加私有属性
        //return 的是基本数据类型对实例没有影响 如果是引用数据类型会改变实例，所以一般不写

    }
}
let a=new A(10);
console.log(a.x);
console.log(typeof A);

//A()；类必须使用new执行 ，不可作为普通函数执行
