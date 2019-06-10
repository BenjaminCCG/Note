class Car{
    constructor(wheel,color,length,width){
        this.wheel=wheel;  
        this.color=color;
        this.length=length; 
        this.width=width;
        this.speed=0
    }

    speedUp(){
        this.speed+=1;
    }
}

const car= new Car(3,'#f00',20,40)
console.log(car);

// 属性
// - 轮子数
// - 颜色
// - 长
// - 宽

// 方法
// - 加速
// - 刹车