console.log('b start');

// console.log(add(10,20));会报错！

const foo='bbb'
console.log('b.js文件被加载执行了')
require('./c.js')
console.log('b end');
