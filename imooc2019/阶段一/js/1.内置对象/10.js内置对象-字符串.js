//split() 将一个字符串分割成字符串数组
//语法:str.split(分隔符)
//返回值：数组
let str="welcome-to-beijing"
//使用split将str转为数组
let arr=str.split('-')
console.log(arr);
console.log(str);

//replace() 只会替换第一个匹配到的
//语法:str.replace(regexp,replacement)
//regexp:规定需要被替换的字符串或者要替换的模式的正则RegExp对象
//replacement:将要替换进来的字符串
//返回值为修改后的字符串
let tel="010-62971268,400-100-9098,010-86789889";
let newTel=tel.replace(","," ")
console.log(tel);
console.log(newTel);