function test(){
    var num=1;
    this.sub=function(){
        return num++
    }
    return sub
}
console.log(test()());
console.log(test()());