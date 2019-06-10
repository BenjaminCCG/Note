//检查对象是否有该属性
// console.log('name' in cat);//返回布尔值

for(var p in cat){
    console.log(p);
    // console.log(cat.p);//会报错，会将P当成属性名,点语法后面只能跟字符串
    console.log(cat[p]);  
    
}