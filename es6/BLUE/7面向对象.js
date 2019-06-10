//面向对象
//ES6写法
//有单独的类的声明、构造函数声明
class Person{
    constructor(name,age){
        this.name=name;
        this.age=age
    }
    showName(){}
    showAge(){}
}

//继承  1.省事  2.便与拓展     
class Worker extends Person{
    constructor(name,age,job){
        super(name,age);
        this.job=job
    }
    
}

//class  类声明
//constructor 构造函数
//extends  继承
//super  父类/超类