//类就相当原型，写在原型上的方法都被实例继承了
//假如想给当前类本身加一点方法，我们可以在方法前面一个关键字 static,不会被实例继承，只有类本身可以使用
//例如 Array.of()
class AA{
    constructor(){
        this.a="aa"
    }
    getA(){
        console.log("哈哈");
        
    }
    static getB(){
        console.log("我是AA的静态方法");
        
    }//此时getB只有类本身可以使用
}
 let aa=new AA();
aa.getA()
AA.getB()
// aa.getB()

//静态方法可以被子类继承
class F{
    constructor(){}
    static getF(){
        console.log("我是F的getF");
        
    }
}
class G extends F{
    // constructor(){ 可省略，会自动加上
    //     super();
    static getF(){
        super.getF() //子类用super调用父类的方法
        
    }
    }


G.getF()