//join():把数组中的所有元素用字符串链接(默认不写是，)
//语法:arr.join("str")
//返回值:字符串
var nums=[2,4,5,6]
str=nums.join();
console.log(typeof str);
var words=["border","left","color"]
var wordstr=words.join("")
var wordstr2=words.join("-")
console.log(wordstr);//borderleftcolor
console.log(wordstr2)//border-left-color

//reverse()颠倒原数组顺序
//语法:arr.reverse ()
var renum=nums.reverse()
console.log(nums);//Array(4) [6, 5, 4, 2]
console.log(renum);//Array(4) [6, 5, 4, 2]

//sort()对数组中所有值的大小进行排序(小=>大)
//语法:arr.sort(function)
//返回值:排序后的数组
var arr=[5,13,32,19,8]
var end=arr.sort((a,b)=>a-b)
console.log(end);



