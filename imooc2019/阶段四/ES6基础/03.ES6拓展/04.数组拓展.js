//结合扩展运算符使用
// function foo(a,b,c){
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// foo(...[1,3,2])

// //新方法
// //Array.from()  将类数组转为数组
// const obj={ //如果是对象的属性名必须是数字类型
//     0:1,
//     1:'22',
//     length:2
// }
// console.log(Array.from(obj,item=>item*2));

// //Array.of()   将所有参数转成一个数组 

// //Array#fill 填充数组
// let ar=new Array(10).fill('嘻嘻',0,3)
// console.log(ar);

// //Array.includes() 判断数组中是否有否一项
// let arr=[1,2,3,4]
// console.log(arr.includes(1));
// console.log(arr.includes(55));


// //arr.keys()
// // console.log(arr.keys());
// for(let i of arr.keys()){
//     console.log(i);    
// }

// //arr.values()
// // console.log(arr.values());
// for(let i of arr.values()){
//     console.log(i);    
// }

// //arr.entries()
// // console.log(arr.entries());
// for(let [k,v] of arr.entries()){
//     console.log(k,v);    
// }


//find 根据条件按顺序遍历数组，当回调返回true时，就返回当前遍历到的值
const res=[1,7,6,3].find((value,index,arr)=>{
    // console.log('value:'+value);
    // console.log('index:'+index);
    // console.log('arr:'+arr);

    return value%2===0
})
console.log(res);

//findIndex 根据条件按顺序遍历数组，当回调返回true时，就返回当前遍历到的值的下标
const res2=[1,7,6,3].findIndex((value,index,arr)=>{
    // console.log('value:'+value);
    // console.log('index:'+index);
    // console.log('arr:'+arr);

    return value%2===0
})
console.log(res2);
