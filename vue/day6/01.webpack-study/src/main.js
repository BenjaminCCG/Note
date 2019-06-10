//项目入口文件
console.log('ok');
import './css/index.css'
import './css/index.less'
// import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.css'
//如果要通过路径的形式，引入node_modules中相关的文件，可以直接省略路径前面的node_modules这一层目录，直接写包的名称，然后后面跟上具体的文件路径
//不写node_modeles这一层目录，默认就会去node_modules中查找

// import './css/index.scss'
class Person{
    //使用static关键字，可以定义静态属性
    //所谓的静态属性，就是可以直接通过类名直接访问的属性
    //实例属性:只能通过类的实例来访问的属性叫做实例属性
    static info={name:'zs',age:20}
}

// var p1=new Person()
// p1.name//实例属性
// Person.name//静态属性

//访问Person类身上的info静态属性
console.log(Person.info);
//在webpack中，默认只能处理一部分ES6的新语法，一些更高级的ES6语法或者ES7语法，webpack是处理不了的，这时候就需要借助于第三方的loader，来帮助处理webpack处理这些高级的语法，当第三方loader把高级语法转为低级的语法之后，会把结果交给webpack去打包到bundle.js中

//通过babel，可以帮我们将高级的语法转为低级的语法
//1.  在webpack中，可以运行如下两套命令，安装两套包去，全装babel相关的loader功能:
//1.1 第一套包:cnpm i babel-core babel-loader babel-plugin-transform-runtime -D
//1.2 第二套包:cnpm i babel-preset-env babel-preset-stage-0 -D
//2.  打开webpack的配置文件，在module节点下的rules数组中，添加一个新的匹配规则:
//2.1 {test:/\.js$/,use:'babel-loader',exclude:/node_modules/}
//2.2 注意:在配置babel的loader规则的时候，必须把node_modules目录通过exclude选项排除掉:原因有俩:
//2.2.1  如果不排除出node_modules，则babel会把node_modules中所有的第三方js文件都打包编译，这样会非常消耗CPU，同时打包速度非常慢
//2.2.2  哪怕最终babel把所有的node_moduls中的JS转换完毕了，但是项目也无法正常运行
//3.   在项目的根目录中，新建一个叫做 .babelrc 的babel配置文件，这个配置文件属于JSON格式，所以在写 .babelrc 配置的时候，必须符合JSON语法规范，不能写注释，字符串必须用双引号
//3.1  在 .babelrc 写如下的配置: presets翻译成【语法】的意思
// {
//     "presets":["env","stage-0"],
//     "plugins":["transform-runtime"]
// }