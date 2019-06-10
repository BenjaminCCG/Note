function People(name,sex,age){
    this.name=name;
    this.age=age,
    this.sex=sex
}
People.prototype.sayhello=function(){
    console.log(this.name+'今年'+this.age+"是个"+this.sex);    
}
// exports.People=People
module.exports=People

//等号右边的东西将自动传给02.js中var接收的那个变量