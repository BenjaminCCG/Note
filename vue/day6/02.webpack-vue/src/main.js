// console.log('ok');
//如何在webpack构建的项目中，使用vue进行开发

//复习 在普通网页中如何使用vue:
//1.使用sript标签，引入vue的包
//2.在index页面中创建一个id为app的div容器
//3.通过new vue得到一个vm的实例

//在webpack中尝试使用vue:
//注意:在webpack中使用import Vue from 'vue'导入的Vue构造函数，功能不完整，只提供了runtime-only的方式，并没有提供像网页中的那种形式
import Vue from 'vue'
// import Vue from "../node_modules/vue/dist/vue.js"
//回顾包的查找规则:
//1.找项目根目录中有没有node_modules的文件夹
//2.在node_modules中根据包名找对应的vue文件夹
//3.在vue文件夹中，找一个叫做package.json的包配置文件
//4.在package.json文件中，查找一个main属性【main属性指定了这个包在被加载时候的入口文件】

// var login={
//     template:"<h1>这是login组件，是使用网页中形式创建出来的组件</h1>"
// }

//1.导入login组件
import login from "./login.vue"
//默认webpack无法打包.vue文件，需要安装相关的loader
//cnpm i vue-loader vue-template-compiler -D
//在配置文件中，新增loader配置项{test:/\.vue$/,use:'vue-loader'}

var vm=new Vue({
    el:"#app",
    data:{
        msg:123
    },
    methods:{},
    // components:{
    //     login
    // }
    render:c=>c(login) //在webpack中如果想通过VUE，把一个组件放到页面中去展示，vm实例中的render函数可以实现
    }
)

//总结梳理:webpack中如何使用vue:
//1.安装vue的包 :cnpm i vue -S
//2.由于在webpack中推荐使用.vue这个组件模板文件定义组件，所以需要安装能解析这种文件loader cnpm i vue-loader vue-template -D
//3.在main.js中，导入vue 模块 import  Vue from 'vue'
//4.定义一个.vue结尾的组件，其中组件有三部分组成:template script style
//5.使用import login from './login.vue' 导入这个组件
//6.创建vm实例的var vm =new Vue({el:"#app",render:c=>c(login)})
//7.在页面中创建一个id为app的div元素，作为我们vm实例要控制的区域

import m333,{title as title123,content} from "./test"
console.log(m333);
console.log(title123+"----"+content);
