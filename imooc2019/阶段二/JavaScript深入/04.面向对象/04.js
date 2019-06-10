//原型模式
function test(name,age){
    test.prototype.name=name;
    test.prototype.age=age;
    test.prototype.run=function(){
        console.log(this.name+'---'+this.age);        
    }
}
var peter=new test('peter',18)
peter.run()