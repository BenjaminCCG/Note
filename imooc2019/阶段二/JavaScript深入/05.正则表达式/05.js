//重复 ：量词

// var str='110';
// var pattern=/\d{2}/;
// console.log(pattern.exec(str));


// var str='110';
// var pattern=/\d{1,2}/; //制定匹配范围 大于等于1个 小于等于2个
// console.log(pattern.exec(str));


// //匹配至少一个
// var str='110';
// var pattern=/\d{1,}/;
// console.log(pattern.exec(str));


// 匹配0次或1次
// var str='110';
// var pattern=/\d?/;
// console.log(pattern.exec(str));
 

// 匹配最少一次
// var str='110';
// var pattern=/\d+/;
// console.log(pattern.exec(str));


// 匹配最少0次
// var str='110';
// var pattern=/\d*/;
// console.log(pattern.exec(str));



// var str='肯德基豪华午餐:￥15.5!';
// // var pattern=/\d+\.?\d*/;
// var pattern=/\d{1,}\.{0,1}\d{0,}/
// console.log(pattern.exec(str));


// var str='aaab';
// var pattern=/a+/;//贪婪匹配会匹配到三个
// console.log(pattern.exec(str));

// var str='aaab';
// var pattern=/a+?/;//后面加上? 将贪婪转成非贪婪
// console.log(pattern.exec(str));


// var str='aaab';
// var pattern=/a+b/;
// console.log(pattern.exec(str));

// var str='aaab';
// var pattern=/a+?b/;
// console.log(pattern.exec(str)); //输出aaab  只有条件允许情况下才会匹配一个a


// var str='<td><p>a</p></td><td><p>a</p></td>';
// var pattern=/<td>.*<\/td>/;
// console.log(pattern.exec(str)); //会一直找到最后一个td



var str='<td><p>a</p></td><td><p>a</p></td>';
var pattern=/<td>.*?<\/td>/;//加上? 转为非贪婪
console.log(pattern.exec(str)); 