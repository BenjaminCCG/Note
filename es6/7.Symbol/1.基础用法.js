//Symbol是一个新的数据类型 而且是一个只类型
//使用 Symbol函数执行得到一个Symbol数据类型
//Symbol跟字符串差不多 但是使用Symbol函数得到一个数据每一个都是完全不同的
//Symbol可以接受一个参数 是对这个Symbol数据的描述
//即使描述一样，但是值也是不一样的
//一般当做对象的属性  任意一个Symbol()得到的值都是不同的
let sym1=Symbol();
let sym2=Symbol();
console.log(typeof sym1);//symbol
console.log(sym1);
console.log(sym2);

let obj={
    sym1:'珠峰',
    [sym1]:'珠峰培训'
};
console.log(obj);
obj[sym2]='珠峰培训';
console.log(obj);

//Symbol值不可以跟其他值计算
// console.log(Number(Symbol(1)));
//Symbol值不可以转为数字

// Symbol(1)+"1" 字符串的拼接也不行
console.log(!Symbol("1"));
//可以toString变成显示字符串
console.log(Symbol("zf").toString());//"Symbol("zf")"


//Symbol.for() 如果之前有相同参数，找到这个值返回
//如果没有就创建一个新的Symnol值  
//使用Symbol.for()参数相同，值就相同
// let zf1=Symbol("zhufeng");//zf1！=zf2
let zf2=Symbol.for('zhufeng')//zf2==zf3
let zf3=Symbol.for('zhufeng')

//Symbol.keyFor(symbol值) 找到使用Symbol.for创建的值的参数
//如果使用的是Symbol创建的是获取不到的 返回undefined
console.log(Symbol.keyFor(zf2));




