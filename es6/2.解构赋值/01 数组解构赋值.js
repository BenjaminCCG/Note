let arr=[1,2,3,4];
let [x,y,m,n]=arr;
console.log(x,y,m,n);//1,2,3,4

//设置默认值;
// let [x1,x2=10]=[1,2]
// console.log(x1,x2);//当不给X2赋值时，默认值为10；
//只有后面解构的值是undefined时才会走默认值
let [x1,x2=(function(){console.log('哈哈');return 10;})()]=[1,2]//此时函数不会自执行
console.log(x1,x2);

//省略赋值
let [,,m2]=[1,2,3];
console.log(m2);//3

//不定参数赋值
let [y1,y2,...y3]=[1,2,3,4,5]//此时将3,4,5组成数组赋值给y3；
console.log(y3);



