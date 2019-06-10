//当前使用function会有变量提声
FF();
new FF();
function FF(f){
    this.f="ff"
}

//ES6 中的class跟let和const一样没有变量提声
// new GG; GG is not defined
class GG{
    constructor(){
        this.gg="gg"
    }
}