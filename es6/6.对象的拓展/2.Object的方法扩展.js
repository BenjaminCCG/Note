//Object()将参数辩称对象
// console.log(Object(1));

//Object.is判断两个值是否相等
// === NaN跟NaN不等   -0===0 true
console.log(-0===0);

console.log(Object.is(NaN,NaN))

//Object.assign 合并对象
//Object.assign(obj1,obj2) 将obj2合并到obj1上，返回obj1
let obj1={name:"珠峰"}
let obj2={age:10};
Object.assign(obj1,obj2)
console.log(obj1);


//ES7中提供了对象的扩展运算符...将对象展开

let school={...obj1,...obj2}
console.log(school);


//Object.getOwnPropertyDescriptor 获取一个对象某个属性的描述
//参数("对象","属性")
 console.log(Object.getOwnPropertyDescriptor('123',"length"));
//字符串的length不可以修改   字符串中的方法是不可以改变原字符串的

 //configurable: false 是否可配置  是否可以删除这个属性
 //enumerable: false 是否可枚举
//writable: false 是否可修改


//Object.keys() 返回值 数组 [所有课枚举的属性]
 console.log(Object.keys(school));

//Object.values() 返回值 数组 [所有可枚举属性的键值]
    console.log(Object.values(school));
    
//Object.entries() 返回值 数组 [每一项也是一个数组[键,值]]
console.log(Object.entries(school));
