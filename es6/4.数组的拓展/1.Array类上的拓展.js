console.log(Array);
//Array类是一个函数 返回一个数组
//Array(x,y,z)将参数变成一个数组返回[x,y,z];
//注意:只有一个参数并且参数是个数字N，返回有n个空位的数组
console.log(Array(1,2,3));
console.log(Array('1'));//["1"]
console.log(Array(7));//[empty*7]


//Array.of()；跟Array一样，唯一不同的是参数一个数字的时候返回仍然是一个只有一项的数组；
console.log(Array.of(7));//[7]

//Array.from(数组/类数组) 返回一个数组
console.log(Array.from([1,2,3]));
console.log(Array.from('123'));
