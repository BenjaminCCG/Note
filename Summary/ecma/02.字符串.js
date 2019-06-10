//1.slice(start,end)
let str='Hello JavaScript';
let res1=str.slice(1,6);
console.log(res1);

//2.substring(start,end)语法与slice()相同
//不同处是 1.参数是负数自动转为0   2.会把较小值作为起始位置
let res2=str.substring(1,6)
console.log(res2);

//3.substr(start,count)
let res3=str.substr(1,6)
console.log(res3);

//4.charAt(index)
let res4=str.charAt(9);
console.log(res4);

//5.charCodeAt(index) 返回字符编码
let res5=str.charCodeAt(9)
console.log(res5);

//6.indexOf(item)
let res6=str.indexOf('ja');
console.log(res6);
let res7=str.indexOf('Ja');
console.log(res7);

//7.lastIndexOf(item)从右往前检索
let res8=str.lastIndexOf('Ja')
console.log(res8);

//8.concat()
let res9=str.concat(' VUE.js')
console.log(res9);

//9.split(分隔符)
let res10=str.split(' ')
console.log(res10);

//10.replace(regexp,newstr)
let res11=str.replace(/a/g,'A')
console.log(res11);

//11.match(regexp)
let res12=str.match(/a/g)
console.log(res12);

//12.toUpperCase()
let res13=str.toUpperCase();
console.log(res13);

//13.toLowerCase()
let res14=str.toLowerCase();
console.log(res14);

//14.includes()
let res15=str.includes('Ja')
console.log(res15);

//15.startsWith()
let res16=str.startsWith('He')
console.log(res16);

//16.endsWith()
let res17=str.endsWith('T')
console.log(res17);

//17.repeat(num)
let res18=str.repeat(2);
console.log(res18);

//18.padStart(length,str) 补全字符串
let res19=str.padStart(20,'g')
console.log(res19);

//19.padEnd(length,str)
let res20=str.padEnd(20,'g')
console.log(res20);



