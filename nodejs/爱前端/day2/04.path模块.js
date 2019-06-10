var path=require('path')

console.log(path.basename('./03.express.js','.js'));//获取文件名

console.log(path.dirname("../day1/04.js"));//获取文件目录

console.log(path.extname("../day1/04.js"));//获取文件拓展名

console.log(path.isAbsolute("../day1/04.js"));//是否是绝对路径 false

console.log(path.path("../day1/04.js"))//将一个路径拆分成一个对象

console.log(path.join("c:/a","b"))//在多个参数之间添加拼接符/

