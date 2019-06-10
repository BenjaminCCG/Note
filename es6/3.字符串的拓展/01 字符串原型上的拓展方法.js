console.log(String.prototype);
//1.includes()  返回值为布尔值 true/false
//判断字符串中有没有指定字符
//语法 includes("指定字符","开始查找的位置(可选)")
//第二个参数是一个数字，不是数字默认转为数字,Numer()方法转
let str='abcdefg12345';
console.log(str.includes('a',2));

//2.startsWith()  endsWith()
//startsWith() 判断字符串是不是以指定字符串开头
//startsWith("指定字符","开始查找的位置(数字)")
console.log(str.startsWith('d',3))//true

//endsWith() 判断字符串是不是以指定字符串开头
//endtsWith("指定字符",num)
//num： 指定方法从字符串前num个字符串来判断
console.log(str.startsWith('d',3))//false

//3.repeat(num) 将字符串重复num次；
//num 取整，不可以是负数或者infinity
console.log(str.repeat(2));

//4.padStart()  padEnd();
//按照指定字符串补全字符串的指定长度
//参数 1.长度length  2.指定字符
//padStrat/padEnd(length,"指定字符")
let str1="ab";
console.log(str1.padStrat(5,"g")); //gggab

