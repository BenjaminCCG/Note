function getA([a,b,c,...d]){
    console.log(a,b,c,d);    
}
getA([1,2,3,4])

function getB1({name="zhifeng",age=100}={}){
    console.log(name,age);    
}

function getB2({name,age}={name:'zhufeng',age:100}){
    //{name,age}={}
    console.log(name,age);    
}
getB1({}) //此时输出默认值
getB2({}) //此时为B2传实参undefined