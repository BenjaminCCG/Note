//转换字符串大小写
//toUpperCase()    toLowerCase()
//语法:str.toUpperCase()   str.toLowerCase()
//不会修改原字符串
// let str="hello world"
// let upper=str.toUpperCase()
// console.log(upper);
// console.log(str);

// function camelback(str){
//     let arr=str.split("-")
//     var y=[]
//     y.push(arr[0])
//     for(var i=1;i<arr.length;i++){        
//         var  newstr=arr[i].charAt(0).toUpperCase()+arr[i].slice(1)
//         y.push(newstr)        
//     }
//     return y.join("")
// }
// var camel=camelback('border-left-color')
// console.log(camel);

function camelback(str){
    let arr=str.split("-")
    var newstr=arr[0]
    for(var i=1;i<arr.length;i++){        
       newstr+=arr[i].charAt(0).toUpperCase()+arr[i].slice(1)
               
    }
    return newstr
}

var camel=camelback('border-left-color')
console.log(camel);
