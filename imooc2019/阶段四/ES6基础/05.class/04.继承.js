//extends
class Human{
    constructor(name,age,sex,hobby){
        this.name=name;
        this.age=age;
        this.sex=sex;
        this.hobby=hobby;
    }
    desc(){
        const {name,age,sex,hobby}=this;
        console.log(`我叫${name},性别${sex},爱好${hobby},今年${age}岁`);
        
    }
    eat(){
        console.log('吧唧吧唧');        
    }
}

class FEEngineer extends Human{
    constructor(skill,salary,name,age,sex,hobby){
        super(name,age,sex,hobby)
        this.skill=skill;
        this.salary=salary
    }
    say(){
        console.log(this.skill.join(','));
        
    }
}

const feer=new FEEngineer(['vue','es6'],'1k','张三',18,'女','洗澡');
console.log(feer);
feer.eat()


class Character{
    constructor(name,sex){
        this.name=name;
        this.sex=sex;
        this.skill=[]
    }
}

class Wizard extends Character{
    constructor(name,age){
        super(name,age);
        this.initSkill();
    }
    initSkill(){
        this.skill=[
            {
                name:'阿瓦达索命',
                mp:666,
                level:999
            },
            {
                name:'守护神咒',
                mp:333,
                level:888
            }
        ]
    }
}
