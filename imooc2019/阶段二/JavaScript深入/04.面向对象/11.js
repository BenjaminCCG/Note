//call apply
//call --->obj.call(this,var1,var2,...)
//apply --->obj.apply(this,[...])

function Person(name,age,len){
    this.name=name;
    this.age=age;
    this.len=len;
    this.say=function(){
        console.log(this.name+':'+this.age+":"+this.len);        
    }
}

//call继承
function Student(name,age){
    Person.call(this,name,age)
}

//apply
function Teacher(name,age,len){
    Person.apply(this,[name,age,len])
}
var per = new Person('张三',25,'170')
per.say()


var stu=new Student('李四',18)
stu.say()

var tea=new Teacher('王武',20,'180')
tea.say()