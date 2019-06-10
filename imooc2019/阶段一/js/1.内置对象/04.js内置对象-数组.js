//concat():将多个数组连接到一起
//语法:arr..concat(arr1,arr2,...)
//返回值:连接后的新数组
let arr=["a","b","c"],
    arr1=["d","e",1,2]
let arr2=arr.concat(arr1)
console.log(arr2);

let arr3=[...arr,...arr1]
console.log(arr3);

//slice()截取数组中的值,不会改变原数组
//语法:arr.slice(start,end) start:选取起始位置,如果是负数从尾部开始算起
//end是选取结束位置下标(不包括end下标的那个值)
//返回值:截取所选值的数组
let colors=["red","green","blue","yellow","orange"]
let newColors=colors.slice(1)
console.log(newColors);

let newColors1=colors.slice(1,2)
console.log(newColors1);

let newColors2=colors.slice(2,4)
console.log(newColors2);

let newColors3=colors.slice(-2,4)//如果是负值，起始位置:负值+数组长度=-2+5=3
console.log(newColors3);

var a=[1,'yes',3]  //完成b对a的拷贝
//1.数组遍历  2.concat  3.slice()
//4.
let b=[];
for(x in a){
    b.push(a[x])
}
console.log(b);
