// function add(...arg){
// console.log(...arg);

// }
// add(1,2,3)

//arguments.callee  指向函数本身
function add(num1,num2){
    if(arguments.length!=add.length){
        throw new Error('请传入'+add.length+'个参数')
    }
    // console.log(arguments.callee );
    return num1+num2    
    // console.log(add.length);
    
}
add(1,2)