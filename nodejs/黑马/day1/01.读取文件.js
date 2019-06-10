//fs是file-system的简写，就是文件系统的意思
//在Node中如果想要进行文件操作，就必须引入fs这个核心模块
//在fs这个核心模块中，就提供了所有的文件操作相关的api
//例如fs.readFile就是来读取文件的


//1.使用require方法加载fs核心模块
let fs =require('fs')


//2.读取文件
//  第一个参数就是尧都区的文件路径
//  第二个参数是一个回调函数
//      error
//         如果读取失败,error就是错误对象
//         如果读取成功,error就是null
//      data
//         如果读取成功,data就是读取到的数据
//         如果读取失败,error就是错误对象
// 
//
//      成功
//         data  数据
//         error  null
//      失败
//         data  undefined
//         error  错误对象


fs.readFile('./data/hello.txt',function(error,data){
        // console.log(data); 
        //<Buffer 68 65 6c 6c 6f 20 77 6f 72 6c 64>
        //输出的是二进制数据
        //通过toString转为我们能认识的字符
        // console.log(data.toString()); 
        // console.log(error);
              
})

fs.readFile('./data/a.txt',function(error,data){
    //这里可以通过判断error来确认是否有错误发生
    if(error){
        console.log('读取文件失败');        
    }else{
        console.log(data.toString());        
    }
     
})