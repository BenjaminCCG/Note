//核心模块:
//Node中为JavaScript提供了很多服务器级别的API，这些API绝大多数都被包装到了一个具名的核心模块中了
// 例如操作文件fs  http构建hhtp模块   path 路径操作模块    os操作系统信息模块...

//用来回去及其信息的
const os=require('os')

// 用来操作路径的
const path=require('path')

//获取当前的CPU信息
console.log(os.cpus());

//memory 内存
console.log(os.totalmem());

//extname拓展名
console.log(path.extname('c:/a/b/c/d/hello.txt'));
