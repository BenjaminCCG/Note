// var str='javascript';
// var pattern=/[js]/;
//[]  方括号的正则只能匹配其中一项

// var str='javascript';
// var pattern=/[^js]/; //表示除了j和s之外的任意字符
// console.log(pattern.exec(str));


// var str='javascript';
// var pattern=/[a-z]/;//表示a-z中的英文字母
// console.log(pattern.exec(str));

// var str='javascript';
// var pattern=/[c-d]/;//   c-c   表示c-d中的英文字母  前面的一定要小于等于后面的
// console.log(pattern.exec(str));

// var str='Alex真是太帅了';
// var pattern=/[\u4e00-\u9fa5]///匹配汉字
// console.log(pattern.exec(str));

// var str='JavaScript';
// var pattern=/[a-zA-Z]///匹配小写a到小写z和大写A到大写Z
// console.log(pattern.exec(str));

// var str='00544';
// var pattern=/[0-9]/ //同样 前面小于等于后面
// console.log(pattern.exec(str));

// var str='JavaScript2.0';
// var pattern=/[a-zA-Z0-9]/ 
// console.log(pattern.exec(str));

// /./  表示除了\n转移符外的所有字符
// var str='3.1415926';
// var str1='\n';
// var pattern=/./ 
// console.log(pattern.exec(str));
// console.log(pattern.exec(str1));//null

//  [a-zA-Z0-8_] === \w
//  [^a-zA-Z0-8_] === \W
// var str='_@';
// // var pattern=/[a-zA-Z0-9_]/
// var pattern=/[\w]/
// console.log(pattern.exec(str));

// [0-9] === \d
// [^0-9] ===\D
// var str='00544';
// // var pattern=/[0-9]/
// var pattern=/[\d]/
// console.log(pattern.exec(str));

// \s 匹配空格和制表符        \S 匹配除了空格和制表符
// var str=' ';
// // var pattern=/ /
// var pattern=/\s/
// console.log(pattern.exec(str));


// var str=' 1';
// var pattern=/[\s\d]/ //只会选择方括号的内的其中一项进行匹配
// console.log(pattern.exec(str));

