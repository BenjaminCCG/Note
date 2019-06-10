// __dirname:获取当前文件模块所属目录的绝对路径
// ——filename获取当前文件的绝对路径
console.log(__dirname);
console.log(__filename);
//不受执行node命令所属路径影响的

//模块中的路径标识和文件操作中的相对路径标识不一致
//模块中的路径标识就是相对于当前文件模块，不受执行node命令所处路径影响