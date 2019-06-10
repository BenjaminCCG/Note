//1.数组
//创建方式两种:
//1.构造函数 2.声明字面量

//push():在数组末尾处添加值
// 语法：arr.push(item1,ite2,...)
//返回值是加完值之后的数组长度
var arr=["orange",18]
var arr2=arr.push('yellow',"fucck you")
console.log(arr2);

//unshift():在数据开始处添加值
// 语法：arr.unshift(item1,ite2,...)
//返回值是加完值之后的数组长度
var arr3=["orange",18]
var arr4=arr3.unshift('yellow',"fucck you")
console.log(arr4);

//pop():删除数组的最后一个值
// 语法：arr.pop()
//返回值是被删除的那个元素
var arr5=["orange","cow"]
var arr6=arr5.pop()
console.log(arr6);

//shift():删除数组的第一个值
// 语法：arr.shift()
//返回值是被删除的那个元素
var arr7=["orange","cow"]
var arr8=arr7.shift()
console.log(arr8);