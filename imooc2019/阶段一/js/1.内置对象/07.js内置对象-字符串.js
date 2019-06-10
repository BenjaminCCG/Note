//1.字符串对象的截取方法
//1.slice() 不会改变原字符串
//语法:str.slice(start,end)  end本身不被截取
//返回值:截取出来的字符串
let str="hello world"
let strsli=str.slice(7,10)
console.log(str);
console.log(strsli);

let strsli1=str.slice(-3) //起始位置=-3+字符串长度
console.log(strsli1);

let strsli2=str.slice(-7,-2) //-7+11=4,-2+11=9  ----splice(4,9)
console.log(strsli2);


//2.substring()与slice()语法一样
//区别：
//1.当参数为负数时，自动将参数转换为0
console.log(str.substring(-7,5));//(0,5)
console.log(str.substring(-4,-7))//(0,0)
console.log(str.substring(2,-7))//(0,2)
//2.会把较小值作为起始位置，较大值作为结束位置

//3.substr()
//语法:str.substr(start,count)  起始位置，个数
//返回值:截取出来的字符串
var str1="hello world"
var str2=str1.substr(6,3)
console.log(str1);
console.log(str2);
console.log(str1.substr(-5,4)) //(6,4)
