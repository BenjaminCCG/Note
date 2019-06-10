//类似数组 只有值value 没有key
//通过构造函数方式创建一个set
//参数是一个数组(或者是类似数组的，只要是有intrable)
//有iterable接口：数组、arguments、元素集合、set、map、字符串
//会默认去重，相同的值去除
console.log(new Set([1,2,3,4]));

//size Set实力的大小个数
//add clear delete has


//1.add 增加 如果之前没有加上有则不加，返回值是增加后的实例(可以实现链式写法)
//参数一次只能加一个
let set1=new Set([1,2,"哈哈",null,NaN,true]);
console.log(set1.add(10).add(100));

//2.delete 删除 返回值 true/false  如果里面有这一项就删除成功true，没有此项就删除失败false
console.log(set1.delete(1));
console.log(set1.delete(1000));


//3.clear 清空 没有返回值 undefined
console.log(set1.clear());
console.log(set1);

//4.has 判断有没有此项，有true 没有false
let set2=new Set([1,2,"哈哈",null,NaN,true]);
console.log(set2.has(NaN));


//forEach keys values entries  遍历

//5.forEach
set2.forEach((item,index,input)=>{
    //Set实例只有value，没有key
    //item，index：当前项
    //input:当前Set实例
    console.log(rest);    
})

//6.keys
for(let key of set2.keys()){
    //key 仍然是value值
    console.log(key);
    
}

//7.values
for(let key of set2.values()){
    //val 仍然是value值
    console.log(key);
    
}

//8.entries
for(let [item,val] of set2.entries()){
    //item,val 仍然是value值
    console.log(item,val);
    
}
