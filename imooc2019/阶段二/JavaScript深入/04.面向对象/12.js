//关键词
//instanceof 检测变量是否是对象的实例
var arr=new Array();
console.log(arr instanceof Array);

//delete 删除对象属性
function Fun(){
    this.name='zhangsan';
    this.say=function(){
        console.log(this.name);
        
    }
}

var obj=new Fun()
// console.log(obj.name);
// delete obj.name;
// console.log(obj.name);
obj.say()

// obj.say()
//delete不能删除原型链上的属性

//call apply 
function add(a,b){
    console.log(a+b);    
}

function subs(a,b){
    console.log(a-b);    
}

add.call(subs,5,3) //subs--->add =====>add(5,3) 第一个参数只能引用一个存在的对象
//apply与call方法一样，参数用数组


function animal(){
    this.name='ani';
    this.show=function(){
        console.log(this.name);        
    }
}
function cat(){
    this.name='cat';
}
var an=new animal();
var c=new cat()
an.show.call(c,'1')//通过call方法，将show方法给了cat使用
  



