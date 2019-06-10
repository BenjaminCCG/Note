class A{
    constructor(x){
        this.x=x
    }
    getX(){
        console.log(this.x);        
    }
    static getY(){
        console.log(this);        
    }
}
//子类B继承父类A
class B extends A{
    constructor(x){
        //子类没有this this继承自父类
        //super() 执行完成之后才会有this
        //super() 就是父类A的constructor
        //this.y=100;不可以在super执行之前使用this
        super(x);
        this.y=100;
    }
    getX(){
        //这里的super 指向父类A的原型
        super.getX()
    }
    //static 父类的静态私有方法也可以继承
    static getY(){
        //super 这里指向父类本身
        super.getY()
    }
}
let b=new B("珠峰")
b.getX()
B.getY()