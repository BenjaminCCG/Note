var http=require('http')
var server=http.createServer(function(req,res){
    var userurl=req.url
    //substr函数来判断此时的开头
    if(userurl.substr(0,9)=='/student/'){
        var studentid=substr(9)
        if(/\d{10}/.test(studentid)){
            res.end('您要查询学生信息,id为'+studentid)
        }else{
            res.end('学生学号位数不对')
        }
    }else if(userurl.substr(0,9)=='/teacher/'){
        var teacherid=substr(9)
        if(/\d{6}/.test(teacherid)){
            res.end('您要查询老师信息,id为'+teacherid)
        }else{
            res.end('老师工号位数不对')
        }
    }else{
        res.end('输入信息有误')
    }
})