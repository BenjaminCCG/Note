var pop=name=>{
    return name+2
}
console.log(pop(2));

function add(num1,num2){
    arguments[0]=99
    console.log(num1);    
}

add(55,88)


function getavg(){
    var sum=0;
    for(var i=0;i<arguments.length;i++){
        sum+=arguments[i]
    }
    console.log(sum/arguments.length);    
}
getavg(11,22,33,4)