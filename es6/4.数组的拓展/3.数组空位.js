//数组的空位：数组的某个索引位置没有任何职 undefined不是空位
//判断一个数值中某一个位置是不是空位 in
//in:判断数组索引位置上有没有值，有值返回true 没有返回false
let arr=[,undefined,,,,]//此时一个逗号代表一个空位，最后一个不算
 console.log(arr.length);
 console.log(1 in arr);//判断索引1是不是空位 此时为true
 console.log(0 in arr); //false

 //在ES5中数组方法对空位的处理不一致，一般直接跳过空位

 let arr1=[1,2,,,,3]
 arr1.filter(function(item){
     console.log(item);    
 })
 arr1.find(function(item){
//在ES6中方法将空位处理为undefined
     console.log(item);
     
 })
 