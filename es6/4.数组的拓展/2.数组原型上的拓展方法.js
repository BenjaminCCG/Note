console.log(Array.prototype);
// 所有数组实例上的方法，参数都是从索引n到索引m，都是包含n 不包含m

//1.copyWithin 从原数组中读取内容 覆盖数组的指定位置的内容；会修改原数组
//参数 copyWithin(覆盖内容的起始位置,读取数组的起始位置,查找的结束位置(不包括结束位置，默认到末尾))
//原数组长度不变，如果有超出部分截取掉
let ary1=[1,2,3,4,5,6,7,8]
console.log(ary1.copyWithin(4,2,4));//将索引是2到4(不包括4)的内容替换到索引起始位置是4的地方

//2.fill 按照指定字符填充数组的指定位置 将数组的每一项都变成指定字符，会修改原数组
console.log(ary1.fill("珠峰"));
let ary2=[1,2,3,4,5,6,7,8];
//将索引的2,3,4位置替换为珠峰
console.log(ary2.fill('珠峰',2,5)); 

//遍历数组的方法，参数是一个函数，这个函数中的this是window，我们可以通过 第二个参数改变函数中的this
//reduce和reduceRight不可以改变this，因为他们的第二个参数是时修改起始值

//3.filter 遍历数组 根据返回值去过滤原数组
//返回一个新的数组，原数组不变
let ary3=['珠峰',1,2,3,'珠峰'];
let arr=ary3.filter(function(item,index){//item为数组项,index为索引
    //如果返回true就留下当前项 返回false不留下当前项.
     return typeof item==='number'
})
console.log(arr);

//4.find 先遍历数组 一旦参数函数返回true 停止查找 返回当前项
let a=ary3.find(function(item){
    return true
})
console.log(a);

//5.findIndex 先遍历数组 一旦参数函数返回true 停止查找 返回当前项的索引
let i=ary3.findIndex(function(item){
    return true
})
console.log(i);


//6.includes 判断数组中有没有某一项
//第二个参数是开始查找的位置索引
console.log([1,2,3].includes(1,1));

//7.every 遍历数组 如果遍历每一项都返回true 最后结果为true
//只要有一个为false 结果为false
let a1=[1,2,3,4,'珠峰'].every(function(item){
    return typeof item==='number'
})
console.log(a1);

//8.some 遍历数组 只有有一项返回true 最后结果为true
let a2=[1,2,3,4,'珠峰'].some(function(item){
    return typeof item==='number'
})
console.log(a1);

//9.reduce 迭代   第二个参数作为初始的prev值
let ary4=[1,2,3,4,5]
ary4.reduce(function(prev,item){
    //prev表示上一次的返回值 item 是当前项
    return prev+item;
},10)//10位prev的初始值

//10.reduceRight 跟reduce一样 只是顺序从右开始

//11.keys 遍历每一项的索引接口 使用for of遍历
let ary5=[1,2,3,4,5]
for(let key of ary5.keys()){
    //key 索引
    console.log(key)//0,1,2,3
}

//默认使用for of 遍历数组，默认遍历就是每一项
for(let item of ary5){
    console.log(item);
    
}

// entries 遍历接口 可以遍历到索引和每一项
//每一次遍历得到一个数组[索引，当前项]
for(let e of ary5.entries()){
    console.log(e);    
}
//一般可以通过数组的解构赋值获取到遍历的结果
for(let [index,item] of ary5.entries()){
    console.log(index,item);    
}