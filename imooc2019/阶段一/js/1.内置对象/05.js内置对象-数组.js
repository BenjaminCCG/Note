//splice() 删除、插入、替换数组项
//所有操作将会改变原数组
//返回值:被删除元素的数组

//1.删除
//arr.splice(index,count)  index是开始下标,count是删除数量
let arr=["a","b","c","d","e","f"]
let delarr=arr.splice(2,2)
console.log(arr);
console.log(delarr);

//2.插入
//arr.splice(index,0,item1,item2,...) 插入值是在index的前面!
let arr1=["a","b","c","d","e","f"]
let insertarr=arr1.splice(3,0,"m","n")
console.log(arr1);
console.log(insertarr);

//3.替换
//arr.splice(index,count,item1,item2,...)
let arr2=["a","b","c","d","e","f"]
let replacearr=arr2.splice(1,2,"x","y","z")
console.log(arr2);
console.log(replacearr);