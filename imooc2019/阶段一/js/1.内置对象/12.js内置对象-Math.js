//min()求一组数中的最小值
//语法:Math.min(num1,numj1,...)
var min=Math.min(5,-4,0,9,108,-55)//若出现非数字 返回NaN
console.log(min); 

//max()求一组数中的最大值
//Math.max(num1,numj1,...)
var max=Math.max(5,-4,0,9,108,-55)
console.log(max);


//取整
//1.Math.ceil 向上取整
var num=Math.ceil(189.01)
console.log(num);

//2.Math.floor 向下取整
var num1=Math.floor(189.81)
console.log(num1);

//3.Math.round() 四舍五入取整
var num2=Math.round(189.69)
console.log(num2);


//Math.abs(num) 返回绝对值
var nums=Math.abs(-55)
console.log(nums);
