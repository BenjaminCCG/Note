//获取拓展名
var url="http://www.baidu.com/index.txt"
function getFileFormat(url){
    var index=url.lastIndexOf(".")
    return url.slice(index+1)
}
var formatName=getFileFormat(url)
console.log(formatName);

