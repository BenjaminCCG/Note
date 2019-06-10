//对象的解构赋值
// const obj={
//     a:'hello',
//     b:'world'
// }
// const {b}=obj;
// console.log(b);

const player={
    nickname:'MATA丶川',
    master:'东海龙王',
    skill:[{
        skillName:'龙吟',
        mp:'100',
        time:6000
    },{
        skillName:'龙卷雨击',
        mp:'400',
        time:3000  
    },{
        skillName:'龙腾',
        mp:'900',
        time:60000  
    }]
}

const {master}=player;
const {skill:[skila,{skillName},{skillName:sklName}]}=player

//结合扩展运算符
// const obj={
//     a:'hello',
//     b:'world',
//     c:'javascript'
// }

// const {a,...oth}=obj;
// console.log(oth);

//如何对已经申明了的变量进行对象的解构赋值
// let age;
// const obj={
//     name:'小明',
//     age:22
// }


//默认值
// let girlfriend={
//     name:"小工",
//     age:22
// }

// let {name,age=24,hobby=['学习']}=girlfriend;


//提取对象属性
// const {name,hobby,hobby:[first]}={
//     name:'小工',
//     hobby:['学习']
// }
// console.log(first);

//获取多个 函数返回值
function get(uid){
    return {
        status:true,
        data:{
            name:"小红"
        },
        msg:'请求成功'
    }
}

const {status,data,msg:message}=get()

console.log(message);


