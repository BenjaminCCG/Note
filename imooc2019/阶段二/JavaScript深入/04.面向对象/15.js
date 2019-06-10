//对象冒充
function Person(name,age){
    this.name=name;
    this.age=age;
    this.sayHi=function(){
        console.log('hi');        
    }
}
Person.prototype.walk=function(){
    console.log('walk.........');    
}

function Student(name,age,grade){
    this.newMethod=Person;//冒充Person对象，传递特权属性和特权方法给子类
    this.newMethod(name,age);
    this.grade=grade
}
var s1=new Student('张三',15,15)//s1 是Student对象，继承Person，拥有Person所有属性和方法
console.log(s1.name+' '+s1.age);
s1.sayHi()
// s1.walk()   报错，原型对象方法并未继承
//注意 s1继承了Person中的特权方法和属性，没有继承共有方法和属性
