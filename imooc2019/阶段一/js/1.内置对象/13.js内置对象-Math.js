//Math.rom() 返回一个大于等于0小于1的一个随机数 
 
var random=Math.random();
// console.log(random);

function num(n,m){
    return Math.floor(Math.random()*(m-n+1)+n)
}

var n=num(2,6)
console.log(n);
