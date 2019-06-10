//原型继承:用到原型链概念
function Person(name,age){
    this.name=name;
    this.age=age
}
Person.prototype.sayhello=function(){
    console.log("属性name是"+this.name);    
}
var per=new Person('zhangsan',20)
per.sayhello()

function Student(){}
Student.prototype=new Person('李四',20);//原型继承
Student.prototype.grade=3;
Student.prototype.test=function(){
    console.log(this.grade);    
}
var s=new Student()
s.sayhello()
s.test()
// per.test() //继承新增的prototype属性父对象不会有