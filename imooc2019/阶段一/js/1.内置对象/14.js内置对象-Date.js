var weeks=["日","一","二","三","四","五","六"]
    data=new Date(),
    year=data.getFullYear(),
    month=data.getMonth()+1,
    week=data.getDay()
console.log(data);

// gatFullYear() 返回四位数年份
// getMonth() 返回日期中月份 0-11
// getDate() 返回月份中天数
// getDay() 返回星期 0-6
// getHours() 返回小时
// getMinutes() 返回分
// getSeconds() 返回秒
// getTime() 返回标识日期的毫秒数
console.log("今天是星期"+weeks[week]);
