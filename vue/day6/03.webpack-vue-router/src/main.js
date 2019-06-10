import Vue from "vue"
//1.导入vue-router包    
import VueRouter from 'vue-router'
//2.手动安装VueRouter
Vue.use(VueRouter)

import app from './app.vue'

//导入Account组件
import account from './main/Account.vue'
import goodslist from './main/Goodslist.vue'

//3.创建路由对象
var  router=new VueRouter({
    routes:[
        //account goodslist
        {path:"/account",component:account},
        {path:"/goodslist",component:goodslist}
    ]
}) 



var vm=new Vue({
    el:"#app",
    render:c=>c(app),//render会把el指定的容器中所有的内容都清空覆盖，所以不要把路由的router-view和router-libk直接写到el所控制的元素中
    router  //4.将路由对象挂载到VM上
})

//注意:App这个组件是通过vm实例的render函数渲染出来的，render函数如果要渲染组件，渲染出来的额组件智能防盗el:"#app" 所指定的元素中
//Account和Goodslist组件，是通过路由匹配监听到的，所以这两个组件，只能展示到属于路由<router-view></router-view>中去 