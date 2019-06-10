var path=require("path");

//在内存中，根据指定的模板页面生成一份内存中的首页，同事走动把打包好的bundle注入到页面的底部
//如果要配置插件，需要在导出的对象中，挂在一个plugins节点
var htmlWebpackPlugin=require("html-webpack-plugin")

//当以命令行形式运行webpack或webpack-dev-server的时候，工具会发现我们并没有提供要打包的文件的入口和出口文件，此时他会检查项目根目录中的配置文件，并读取这个文件，就拿到了导出的这个配置对象，然后根据这个对象，进行打包构建
module.exports={
    entry:path.join(__dirname,'./src/main.js'),
    output:{
        path:path.join(__dirname,'./dist'),
        filename:'bundle.js'
    },
    plugins:[//所有webpack插件的配置节点
        new htmlWebpackPlugin({
            template:path.join(__dirname,'./src/index.html'),
            filename:"index.html"
        })
    ],
    module:{
        rules:[
            {test:/\.css$/,use:['style-loader','css-loader']},
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
            {test:/\.scss$/,use:['style-loader","css-loader","sass-loader']},
            {test:/\.(jpg|png|gif|bmp|jpeg)$/,use:'url-loader?limit=7631&name=[hash:8]-[name].[ext]'},//处理图片路径
            //limit给定的值是图片的大小，单位是byte(字节),如果我们引用的图片大于或等于给定的limit值，则不会被转为base64格式的字符串，如果图片小于给定的limit值，则会被转为base64字符串
            {test:/\.(ttf|eot|svg|woff|woff2)$/,use:'url-loader'},//处理字体文件的loader
            {test:/\.js$/,use:'babel-loader',exclude:/node_modules/}//配置Babel转换高级JS语法
        ]
    }
}