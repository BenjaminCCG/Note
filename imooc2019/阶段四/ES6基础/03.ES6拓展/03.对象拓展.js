//1.简洁表示法
// const getUserInfo1=(id=1)=>{
//     const name='xiaoming';
//     const age=10;
//     return {
//         name:name,
//         age:age,
//         say:function(){
//             console.log(this.name+this.age);            
//         }
//     }
// }

// const xiaoming1=getUserInfo1();


// const getUserInfo2=(id=1)=>{
//     const name='xiaoming';
//     const age=10;
//     return {
//         name,//同名的变量和属性名可以简写
//         age,
//         say(){//方法简写省略冒号和function
//             console.log(this.name+this.age);            
//         }
//     }
// }

// const xiaoming2=getUserInfo2();

// //属性名表达式
// const obj={
//     a:1,
//     $abc:2,
//     '####%%%%@#@':3
// }

// const key='age';

// const ming={
//     name:'xiaoming',
//     [key]:14
// }


// //复制对象
// const obj1={  //无论是复制对象还是合并对象都是浅拷贝--->对内存地址的复制,目标对象的值进行了修改则源对象也会修改
//     a:1,
//     b:2
// }
// const obj2={
//     a:9,
//     c:3 
// }
// const obj3={...obj1}

// //合并对象
// const newobj={
//     ...obj1,
//     ...obj2
// }
// console.log(newobj);//当有相同的属性名则保留后一个


// //部分新的方法和属性
// //Object.is(obj1,obj2)  判断两个obj是否全等
// //但是+0、-0和NAN、NAN与===判断结果相反


// //Object.assign(obj1,obj2,...) 合并对象 浅拷贝

// // const obj5=Object.assign({a:1},{b:2},{c:3})
// // console.log(obj5);


// // --------------------------------------------------------

// const obj6={
//     a:1,
//     b:2,
//     c:3,
//     d:4
// }

// //Object.keys  返回对象属性组成的数组
// console.log(Object.keys(obj6));

// //Object.values   返回属性值的数组
// console.log(Object.values(obj6));

// //Object.entries   返回自身键值对组成的数组
// console.log(Object.entries(obj6));


// for(let [k,v] of Object.entries(obj6)){
//     console.log(k,v);    
// }


// //__proto__属性  对象的原型对象


//Object.setPrototypeOf(设置对象,源对象) 设置对象的原型对象
const obj1={a:1};
const obj2={b:1};
const obj=Object.create(obj1)
console.log(obj.__proto__);//此时是obj1

Object.setPrototypeOf(obj,obj2)
console.log(obj.__proto__);//此时是obj2

//Object.getPrototypeOf(访问对象) 访问对象的原型对象



//super 访问到对象的原型

const ob1={name:'xiaoming'}

const ob2={
    say(){//只有简写方式可以使用super  箭头函数或者普通function使用super都会报错
        console.log(`My name is ${super.name}`);        
    }
}
Object.setPrototypeOf(ob2,ob1);
ob2.say()
