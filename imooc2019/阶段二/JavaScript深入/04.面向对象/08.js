//原型和原型链
//js继承
var person=function(){}
person.prototype.say=function(){
    console.log('天气真好');    
}
person.prototype.gongzi=500;
var programmer=function(){}
    programmer.prototype=new person();
    programmer.prototype.wcd=function(){
        console.log('明天天气也不错');        
    }
    programmer.prototype.gongzi=1000
var p=new programmer();
p.say();//p 没有say方法  会去p.__proto__属性中找
//p.proto=person.prototype
console.log(p.gongzi);


//var p =new programmer(); p.__proto__=programmer.prototype = new person()
//
