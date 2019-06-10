//封装
// function demo(){
//     var n=1;
//     function test(){
//         n++
//     }
//     test()
//     return n
// }
// demo()
// console.log(demo());


function demo(){
    var n=1
    function test(){//特权方法
        return ++n
    }
    return test
}
// console.log(demo()());


function A(){
    function _xx(){console.log(11);
    }
    this.xx=function(){
        return _xx
    }
}

A.prototype={
    oth:function(){
        console.log('普通方法');
        
    }
}

var a=new A()
a.xx()()