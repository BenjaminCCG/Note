//1.push()
let arr=['orange','apple','pear'];
arr.push('banana','sweet')
console.log(arr);

//2.unshift()
arr.unshift('ben','jamin')
console.log(arr);

//3.pop()
arr.pop();
console.log(arr);

//4.shift();
arr.shift();
console.log(arr);

//5.join()
str=arr.join('')
console.log(str);
str1=arr.join(',')
console.log(str1);

//6.reverse()
arr.reverse();
console.log(arr);

//7.sort()
let arr2=[15,8,23,44,61]
arr2.sort();
console.log(arr2);
arr2.sort((a,b)=>a-b)
console.log(arr2);

//8.concat()
let result=arr.concat(arr2)
console.log(result);

//9.slice()
let cut=result.slice(1,5);
console.log(cut);

let cut2=result.slice(-9,-5);
console.log(cut2);

//10.splice();
result.splice(1,2,'vue','js','react');
console.log(result);

//11.indexOf() lastIndexOf()
let index=result.indexOf('js')
console.log(index);

let index2=result.lastIndexOf('banana')
console.log(index2);


//12.Array()
console.log(Array('a','b','c'));
console.log(Array(1,2,3));
console.log(Array(7));//返回数组长度为7的空数组

//13.Array.of()
console.log(Array.of('a','b','c'));
console.log(Array.of(1,2,3));
console.log(Array.of(7));

//14.Array.from()将类数组转为数组
console.log(Array.from('123'));

//15.fill() 
arr.fill('渣渣辉',0,2)
console.log(arr);

//16.includes()  判断是否有该项，返回布尔值
let index3=result.includes('js')
console.log(index3);

//17.copyWithin() 接收三个参数(替换位置下标，复制的起始位置，复制的结束位置(不包括))
arr.copyWithin(1,2,4)
console.log(arr);

//18.find() 遍历 返回符合条件的值，一旦找到则停止查找
let nums=[1,2,3,4,5,6,7,8,9]
let res1=nums.find(item=>item%3==0)
console.log(res1);

//19.findIndex() 遍历 返回符合条件值的下标，一旦找到则停止查找
let res2=nums.findIndex(item=>item%3==0)
console.log(res2);

//20.every() 遍历 所有项都符合条件则返回true,有一个不符合返回false
let res3=nums.every(item=>typeof item==='number')
console.log(res3);
let res4=nums.every(item=>item<9)
console.log(res4);

//20.some() 遍历 只要有一项符合条件返回true
let res5=nums.some(item=>item>8)
console.log(res5);

//21.reduce() 迭代 接收两个参数(function(prev,item),初始值)
let res6=nums.reduce((prev,item)=>prev+item,100)//100+1+2+3+4+5+6+7+8+9
console.log(res6);

//22.map(item,[index],[arr]) 遍历数组 创建一个新的数组，其中每一个元素由调用数组中的每一个元素执行提供的函数得来
let res7=nums.map((item,index)=>{
    return `索引为${index}的值是${item}`    
})
console.log(res7);

//filter()
let re=nums.filter((item,index)=>{
    return item%3==0
})
console.log(re);




//23.forEach(item,[index],[arr]) 遍历数组 针对每一个元素执行提供的函数
//forEach()方法不会返回执行结果，而是undefined。也就是说，forEach()可以修改原来的数组。而map()方法会得到一个新的数组并返回。
let number=[];
let res8=nums.forEach((item,index)=>{    
    nums[index]=item*2
})
console.log(nums);

//24.for in   for...in循环出的是key
let animals=['tiger','panda','cat','dog','snake','monkey','donkey']
animals.name='Benjamin'//作用于数组的for-in循环除了遍历数组元素以外,还会遍历自定义属性。
for(let index in animals){
    console.log(index+' '+animals[index]);    
}


//25.for of    for...of循环出的是value
for(let value of animals){
    console.log(value);    
}


//26.keys()数组索引的集合
// console.log(animals.keys());
for(let key of animals.keys()){
    console.log(`第${key}项是${animals[key]}`);    
}

//27.values()数组元素的集合
for(let value of animals.values()){
    console.log(value);    
}


//28.entries() 数组键值对的集合 每次遍历可以得到一个数组[索引,当前项]
for(let e of animals.entries()){
    console.log(e);    
}
 for(let [k,v] of animals.entries()){
     console.log(k+' '+v);     
 }







