//使用数组的解构赋值形式，如果等号右边不是一个数组，默认将其转换为类似数组的对象，必须有一个length属性
let [x,y]='123';
console.log(x,y);

//使用对象的解构赋值形式，若果等号右边不是对象 默认转为对象
let  {a}=1;
console.log(a);

let {b}="1234";
Object('1234')