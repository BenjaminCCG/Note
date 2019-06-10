//map 映射 一一对应
let arr=[68,53,12,98,65,83,16];
// let arr2=arr.map(item=>{
//     return item>=60?"及格":"不及格"
// })
// console.log(arr);
// console.log(arr2);

//redecue n=>1
// let result=arr.reduce((tmp,item,index)=>{
//     if(index==arr.length-1){
//         return (tmp+item)/arr.length
//     }else{
//         return tmp+item
//     }
// })
// console.log(result);


//filter 过滤
let arr3=arr.filter(item=>{
    // if(item%2==1){
    //     return false
    // }else{
    //     return true
    // }
    return item%2==0
})
// console.log(arr3);

//forEach 遍历 
arr.forEach((item,index)=>{
    console.log(`第${index}个是${item}`);//反单引号    
})