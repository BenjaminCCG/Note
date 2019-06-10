//指定匹配位置

// var str='js';
// var pattern=/^js/ //指定以j开头的首匹配  与[]内的^不同 这是取反
// console.log(pattern.exec(str));


// var str='html js';
// var pattern=/js$/ //尾匹配 
// console.log(pattern.exec(str));


// var str='110119a120';
// var pattern=/^\d+$/   //开头和结尾都加上限位符可以保证中间数据符合正则需求
// console.log(pattern.exec(str));

// var str='110119120';
// var pattern=/\D/   
// console.log(pattern.exec(str));


// var str='js html';
// var pattern=/js\b/  //设置边界
// console.log(pattern.exec(str));


// var str='@@@js@@@';
// var pattern=/\bjs\b/
// console.log(pattern.exec(str));

