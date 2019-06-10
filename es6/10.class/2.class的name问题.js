let A=class AA{
    //此时AA 只能在类里面使用 类的name都是AA
    constructor(){        
       console.log(AA.name);        
    }
    getA(){
        console.log(AA.name);
        
    }
}
// let a=new AA()// 此时不可用AA
let a=new A();
console.log(A.name);
a.getA()
