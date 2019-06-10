//indexOf() 从数组开头向后查找需要的项
//语法:arr.indexOf()(searchValue,startIndex)
//searchValue 要查找的项 
//startIndex 起点位置索引 可选
//返回值:查找的项在数组的索引位置 没有返回-1
let nums=[1,7,5,7,8,1,6,9]
let pos=nums.indexOf(7,2)
console.log(pos);

//lastIndexOf() 从数组从后往前查找需要的项
//语法:arr.lastIndexOf()(searchValue,startIndex)
//searchValue 要查找的项 
//startIndex 起点位置索引 可选
//返回值:查找的项在数组的索引位置 没有返回-1

let pos1=nums.lastIndexOf(1)
console.log(pos1);

