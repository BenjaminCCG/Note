//1.charAt()
//语法:str.charAt(index) 返回字符串index位置的字符
let str="hello world"
console.log(str.charAt(1));


//2.charCodeAt() 返回index位置字符编码
//语法:str.charCodeAt(index)
console.log(str.charCodeAt(5));

//indexOf() 搜索给定的字符串，返回字符串的位置索引,没有则返回-1
//语法:str.indexOf("x")
let email="marry@163.com"
console.log(email.indexOf("@"));
console.log(email.indexOf("rr"));//返回第一个r的位置

//lastIndexOf() //从右往左检索
//语法:str.lastIndexOf("x")
console.log(email.lastIndexOf("."));

//concat()
let cat=str.concat(email)
console.log(cat);

