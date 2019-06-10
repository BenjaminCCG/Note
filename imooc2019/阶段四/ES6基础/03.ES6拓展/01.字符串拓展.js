// //1.模板字符串
// const xiaoming={
//     name:'xiaoming',
//     age:14,
//     say1:function(){
//         console.log('我叫'+this.name+',我今年'+this.age+'岁');        
//     },
//     say2:function(){
//         console.log(`我叫${this.name.toUpperCase()},我今年${this.age}岁`);
        
//     }
// }
// xiaoming.say2()
// xiaoming.say1()


// //2.部分新方法
// //padStart padEnd  对字符串进行补全
// let str='i';
// let str1=str.padStart(5,'mooc');
// console.log(str1);
// let str2=str.padEnd(5,'mooc');
// console.log(str2)


// //repeat  重复字符串
// console.log('i'.repeat(10));


// //startsWith endsWith  判断字符串是不是以***开头或者结尾 返回布尔值

// //includes 判断字符串是不是存在该字符
// const str3='A promise is a promise'

// if(str3.indexOf('promise')!==-1){
//     console.log('存在1');    
// }
// if(str3.includes('a promise')){
//     console.log('存在2');    
// }

//遍历字符串
//1.使用for循环
let str4='PROMISE';
// for(var i=0,len=str4.length;i<len;i++){
//     console.log(str4[i]);
//     console.log(str4.charAt(i));        
// }

//2.将字符串转成数组
// let oStr=str4.split('');
// let oStr1=[...str4];
// let [...oStr2]=str4;
// console.log(oStr);
// console.log(oStr1);
// console.log(oStr2);


// //3.for-of遍历字符串
// for(let word of str4){
//     console.log(word);    
// }


//unicode
console.log('\u{1f436}');

