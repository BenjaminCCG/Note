//如果变量名和属性名一样，可以直接省略
//let {name:name,age:age}={name:'珠峰',age:20}
// let {name,age}={name:'珠峰',age:20}
// console.log(name);

//默认值
// let {name,age=10}={name:"珠峰",age:undefined};
// console.log(age);

//嵌套
let {name,age=10,list:[a1,a2,a3,a4]}={name:"珠峰",age:undefined,list:['js','node','vue','react']};
console.log(name,age,a1,a2,a3,a4);

let {x1,x2}={x1:10,x2:20};
console.log(x1,x2);

