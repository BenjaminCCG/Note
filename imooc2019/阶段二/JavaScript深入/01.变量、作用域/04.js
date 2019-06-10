//变量作用域
//1.变量的生命周期
//2.访问到变量

//js解析机制
var name='xm'
function fn(){
    console.log(name);
    var name='xh'    
}
fn()//undefined
// 变量名与函数名冲突，保留函数
//函数名与函数名冲突 保留后面的函数
  