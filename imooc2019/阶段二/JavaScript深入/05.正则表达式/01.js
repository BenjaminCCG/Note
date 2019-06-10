 //创建正则表达式的两种方式
 //匹配到的都是字符串中的数据

 //字面量
// /JS/

//  //构造函数
//  new RegExp

// var str='I love js';
// var pattern = /js/

//  普通字符: /js5_正则,;!@/
//  特殊字符: /..../ 

// var str='I love js';
// var pattern = /js/

// //test  exec 正则的方法

// console.log(pattern.test(str)); //返回布尔值 true
// console.log(pattern.exec(str)); //将找到的字符串放到数组中返回给我们

// var str='I love js';
// var pattern = /JS/

// //test  exec 正则的方法

// console.log(pattern.test(str)); //false
// console.log(pattern.exec(str)); //找不到时返回null
  
//修饰符 
//i 忽略大小写

//g 全局匹配

//m 多行匹配

// var str='I love Js';
// var pattern = /js/i;
// // /js/gim 顺序不重要
// console.log(pattern.test(str)); 
// console.log(pattern.exec(str)); 

// var str='i love JS';
// var pattern=new RegExp('js','i')//第一个参数选定模式，第二个参数修饰符
// console.log(pattern.test(str));
// console.log(pattern.exec(str)); 



var str='I love Js';
var userInput='love';
var pattern=new RegExp(userInput,'i')
console.log(pattern);
console.log(typeof pattern);
console.log(pattern.exec(str));

