//static 关键字 只适用于静态方法
class Car{
    constructor(){
        Car.totalcar+=1
        this.speed=0;
    }
    speedUp(){
        this.speed+=1
    }

    static repair(car){
        console.log('我是修车的');   
        console.log('我要修的车是:'+car);     
    }
}

Car.repair('1豪车')


//静态属性
// Car.属性名=属性值
Car.totalcar=0;
new Car();
new Car();
new Car()
console.log(Car.totalcar);


// class Character{
//     constructor(pfs){
//         this.pfs=pfs
//     }
//     Character.config={
//         profession:{
//             '咒术师':1,
//             '弓箭手':2
//         }
//     }
// }