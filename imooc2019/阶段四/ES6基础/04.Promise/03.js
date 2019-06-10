function f(val){
    return new Promise((resolve,reject)=>{
        if(val){
            resolve({name:'xiaoming'})
        }else{
            reject('404')
        }
    })
}
// f(true).then(data=>{
//     console.log(data);    
// },res=>{
//     console.log(res);    
// })

f(true).then(data=>{
    console.log(data);
    return f(false)
}).then(()=>{
    console.log('我不会被输出');    
},()=>{   
    console.log('失败');//如果reject触发则catch不再执行    
}).catch(e=>{
    console.log(e);    
});

f(true).then(data=>{
    console.log(data);
    return f(false)
}).catch(e=>{
    console.log(e);    
}).finally(()=>{ //finally中的语句都会执行
    console.log(100);    
})