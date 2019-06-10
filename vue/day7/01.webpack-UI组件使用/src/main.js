import Vue from "vue"
//1.导入vue-router包    
import VueRouter from 'vue-router'
//2.手动安装VueRouter
Vue.use(VueRouter)


//导入bootstrap样式
import 'bootstrap/dist/css/bootstrap.css'

import './css/app.css'

import "./lib/mui/css/mui.min.css"


// //导入所有的MintUI组件
// //导入Mint-UI
// import MintUI from 'mint-ui'  //把所有的组件到导入进来
// //这里可以省略node_modules这一层目录
// import 'mint-ui/lib/style.css'
// //将MintUI安装到Vue中
// Vue.use(MintUI)  //把所有的组件，注册为全局组件



//按需导入Mint-ui组件
import {Button} from 'mint-ui'
//使用Vue.component注册按钮组件
Vue.component(Button.name,Button)



import app from './app.vue'

//导入自定义路由模块
import  router from './router.js'

//导入Account组件


var vm=new Vue({
    el:"#app",
    render:c=>c(app),//render会把el指定的容器中所有的内容都清空覆盖，所以不要把路由的router-view和router-libk直接写到el所控制的元素中
    router  //4.将路由对象挂载到VM上
})

//注意:App这个组件是通过vm实例的render函数渲染出来的，render函数如果要渲染组件，渲染出来的额组件智能防盗el:"#app" 所指定的元素中
//Account和Goodslist组件，是通过路由匹配监听到的，所以这两个组件，只能展示到属于路由<router-view></router-view>中去 