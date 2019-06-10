//构造函数方式创建一个Map实例
//new Map([[key,value],[]])
//参数是一个数组,数组每一项也是一个数组，有两项 key，value
//一个对象的属性名必须是字符串，如果不是字符串默认转为字符串 
//但是Map实例的可以是任意数据类型
let arr=[1,2]
let o={}
let map1=new Map([[1,"珠峰"],[true,"培训"],[o,{name:"珠峰"}]])
console.log(map1);

//1.size:键值对的个数

//get set has  delete clear
//2.get(key) 获取value
console.log(map1.get(1));
console.log(map1.get(true));
console.log(map1.get(o));

//3.set(key,value) 设置value
//如果之前有过key 一样是修改，没有是增加  返回新的map实例(实现链式写法)
console.log(map1.set(1,2));
console.log(map1.set(false,2));


//4.has 判断有没有对应的value  有true 没有false
console.log(map1.has(1));

//5.delete 删除属性key   返回值是true/false
console.log(map1.delete(1));
console.log(map1);

//6.clear 清空 没有返回值
console.log(map1.clear());



//forEach keys values entries


let map2=new Map([[1,"珠峰"],[true,"培训"],[o,{name:"珠峰"}],[arr,[1,2]]])

//7.forEach
map2.forEach((key,value,input)=>{
    console.log(key);
    console.log(value);
    console.log(input);
    
})

//keys
for(let key of map2.keys()){
    console.log(key);    
}

//values
for(let val of map2.values()){
    console.log(val);    
}

//entries
for(let [key,val] of map2.entries()){
    console.log(key,val);    
}

//数组变成Map实例
let arr=["珠峰","JS","VUE"]
let map3=new Map();
for(let [index,item] of arr.entries()){
    map3.set(index,item)
}