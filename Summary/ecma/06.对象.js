//简写方式
let name='ming';
let age=18;
let str='^%^%$^%$%^#$'
let obj={
    name,
    age,
    say(){
        console.log(this.name);        
    },
    [str](){
        console.log(this.age);        
    }
}
obj['^%^%$^%$%^#$']()

//复制对象
let obj2={...obj}
console.log(obj2);


//set与get 方法
let obj3={
    _value:'说谎',
     get value(){
         return this._value
     },
     set value(val){
        this._value=val
     }
}
//通过访问和修改value的值就可以分别操作get\set 方法
console.log(obj3.value);
obj3.value='林宥嘉';
console.log(obj3.value);


  
//Object.is() 判断两个对象是否相等  NaN与+0、-0较特殊
console.log(NaN===NaN);
console.log(+0===-0);
console.log(Object.is(NaN,NaN));
console.log(Object.is(+0,-0));

//Object.assign 合并对象
//Object.assign(obj1,obj2) 将obj2合并到obj1上，返回obj1
//后面的相同属性名会覆盖第一个属性名
let obja={
    a:123,
    b:'str'
}
let objb={
    b:'fuck',
    c:'luck'
}
let res=Object.assign(obja,objb)
console.log(res);
console.log(objb);


//Object.keys(obj) 对象属性名的集合
for(let key of Object.keys(res)){
    console.log(key);    
}

//Object.values(obj) 对象属性值的集合
for(let value of Object.values(res)){
    console.log(value);    
}

//Object.entries(obj) 对象键值对的集合，每一项为属性名与属性值的数组
for(let e of Object.entries(res)){
    console.log(e);    
}

for(let [k,v] of Object.entries(res)){
    console.log(k,v);    
}