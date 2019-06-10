// const arr=[1,2,3,4]
// let [a,b,c,d]=arr;
// console.log(a,b,c,d);

//更复杂的匹配规则
// const arr=['a','b',['c','d',['e','f','g']]]
// const [,,[,,[,,g]]]=arr;
// console.log(g);


//扩展运算符  ...
// const arr1=[1,2,3]
// const arr2=['a','b']
// const arr3=[...arr1,...arr2]
// console.log(arr3);

// const arr=[1,2,3,4,5,6]
// const [a,b,...c]=arr //扩展运算符必须是最后一个
// console.log(c);


//默认值 只有是undefined时默认值才有效
// const arr=[1,undefined,undefined]
// const [a,b=2,c,d='aaa']=arr;
// console.log(a,b,c,d);

// //交换变量
// // let a=20;
// // let b=10;
// // let temp;
// // temp=a;
// // a=b;
// // b=temp;


// let a=20;
// let b=10;

// [a,b]=[b,a]



//接收多个  函数返回值
function get(id){
    return [
        true,
        {
            name:'小明',
            gender:'女',
            id:id
        },
        '请求成功'
    ]
}

const [bool,obj,msg]=get(132)

console.log(bool,obj,msg);

