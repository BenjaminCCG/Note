//设置年月日时分秒方法 将get改成set
var today=new Date()
var year=today.getFullYear();
var month=today.getMonth()
var day=today.getDate()

//给new Date()传参用年月日时分秒用逗号隔开或者毫秒数
var temp=new Date(year,month,day+50)