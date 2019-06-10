//构造函数的继承
function Parent(name,job){
    this.name=name;
    this.job=job
    this.say=function(){
        console.log('父亲的名字是:'+this.name);        
    }
}
// function Child(name,age){
//     Parent.call(this,name)
//     this.age=age
// }
// var ch=new Child('zhangsan')
// ch.say()


function Child(name,age,job){
    this.pObj=Parent;
    this.pObj(name,job);//()继承方法 ()内继承属性
    
    this.age=age
    this.sayC=function(){
        console.log("child："+this.name+'----'+'age:'+this.age+" job:"+this.job);        
    }
}

var p =new Parent('zhangsan')
p.say()
var c=new Child('lisi',20,'wroker')
c.sayC()
//父对象被子对象继承 所有的属性和方法，都将传递到子对象中