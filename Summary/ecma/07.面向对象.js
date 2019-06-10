//ES6
class Person{
    constructor(name,age,hobby){
        this.name=name;
        this.age=age;
        this.hobby=hobby
    }
    say(){
        console.log(`我叫${this.name}，我今年${this.age}了`);        
    }
    static run(){
        console.log(`我的兴趣爱好是${this.hobby}`);
        
    }
}

let cxk=new Person('cxk',20,'rap')
cxk.say()
Person.hobby='rap'
Person.run()

//继承问题
class Hero extends Person{
    constructor(name,age,hobby,magic,skill){
        super(name,age,hobby)
        this.magic=magic;
        this.skill=skill
    }
    attack(){
        console.log(`快使用${this.skill}`);        
    }
}

let spliderMan=new Hero('splider','22','snake','50','biubiubiu')
spliderMan.attack()
spliderMan.say()


//ES5、ES3
function Human(name,age){
    this.name=name;
    this.age=age
}
Human.prototype.run=function(){
    console.log('跑就完事了');    
}

let man=new Human('cxk',20)
man.run()

//继承
function Woman(name,age,hobby){
    Human.apply(this,[name,age])
    this.hobby=hobby
}
Woman.prototype=new Human()
Woman.prototype.enjoy=function(){
    console.log(`老娘就要${this.hobby}`);    
}

let xd=new Woman('xd',22,'买买买')
xd.run()
xd.enjoy()






