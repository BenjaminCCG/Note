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