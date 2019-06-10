let obj={
    _name:'AA',
    get name(){
        //只要通过obj获取name属性就会触发这个函数
        //并且可以通过return 返回值一个值
        console.log(1);
        return this._name
        
    },
    set name(val){
        //只要是通过obj给name属性设置值就会触发这个set函数
        console.log(2);
       //val :通过这里设置改变name的值  
       this._name=val;      

    }
    
}
// console.log(obj.name);
obj.name="珠峰"
console.log(obj.name);//此处被set方法拦截所以没有改变name的值

