//callee:返回正在执行的function对象  是arguments的一个属性
//arguments.callee 默认值 正在执行的function对象
function demo(){
    console.log(arguments.callee); //callee当做属性，函数内容
    // console.log(arguments.callee());  报错:进入死循环   
}
// demo()

function sum(n){
    if(n<=1){
        return 1
    }else{
        return n*arguments.callee(n-1)
    }
}
console.log(sum(5));
