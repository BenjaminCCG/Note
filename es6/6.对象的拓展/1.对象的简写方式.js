let name="珠峰",age=100;
let school={name,age}//相当于 let school={name:nam,age:age};

let obj={
    fn(){},//fn:function(){}
    //属性名是字符串，属性名使用[]，里面可以写变量
    [str]:name,
    ["my"+str]:name
}