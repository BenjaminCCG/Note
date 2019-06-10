//构造函数
function Person(name,sex,age){
    this.name=name;
    this.sex=sex;
    this.age=age;
    this.show=function(){
        console.log(this.name+'---'+this.sex+'---'+this.age);        
    }
}
var peter=new Person('peter','男',18)
peter.show()




class People{
    constructor(name,age){
        this.name=name;
        this.age=age
    }
    show(){
        console.log(this.name+'---'+this.age);
        
    }
}
var ben=new People('ben',18)
ben.show()

//工厂模式
function factory(name,age){
    var obj=new Object();    //1.不同
    obj.name=name;          //4.不同，定义属性不用this
    obj.age=age;
    obj.run=function(){
        console.log(this.name+'---'+this.age);        
    }
    return obj      //2不同
}
var peter=factory('peter',18)   //3不同
peter.run()

