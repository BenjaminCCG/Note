//选择、分组和引用
 
// var str='css html js'
// var pattern=/html|css|js/;
// console.log(pattern.exec(str));


// var str='ab'
// var pattern=/a|ab/;//会从最左侧的尝试先匹配，一旦匹配到就会忽略后面的
// console.log(pattern.exec(str));


// var str='abab'
// var pattern=/(ab)+/;//将ab归为一组，对整体进行操作
// console.log(pattern.exec(str));


// var str='abcd'
// var pattern=/(ab)c/;
// console.log(pattern.exec(str));  会先不管括号输出匹配到的值 再输出按括号进行分组的字符

// var str='abcd'
// var pattern=/(?:ab)c/;//加上?:   非捕获分组
// console.log(pattern.exec(str));


// var str='abcd'
// var pattern=/(ab)(c)/;
// console.log(pattern.exec(str));


// var str='abcd'
// var pattern=/(a(b(c)))/; //输出分组顺序: 从左往右数左括号
// console.log(pattern.exec(str));


// var str='ab cd ab'
// var pattern=/(ab) cd \1/;   //此处的\1代表的是第一个，但是输出不会被当成分组输出
// console.log(pattern.exec(str));


var str='<p><a>这是一段文字</a.></p>'
var pattern=/<([a-zA-Z]+)>(.*?)<\/\1>/;
console.log(pattern.exec(str));
