//扩展运算符 ...将数组、类数组展开
//1.将非数组变成数组(类数组 length)
let str="123";
console.log([...str]);

function fn(){
    console.log([...arguments]);    
}
fn(1,23,445)

//2.将数组变成非数组
let arr1=[1,2,3,4];
let arr2=[10,20,30,40];
[...arr1,...arr2]

let ary=[1,23,12,45,242,132];
Math.max.apply(null,ary)//apply展开

Math.max(...ary)//数组最大值