//对象属性的遍历 对象可以当做数组处理 for in
var ren={};
ren.name="zhangsan";
ren.age=18;
ren.len="180";
ren.run=function(){
    return this.age
}
 for(var i in ren){
     console.log(i);
     console.log(ren[i]);          
 }