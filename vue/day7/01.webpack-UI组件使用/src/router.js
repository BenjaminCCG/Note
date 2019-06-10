import VueRouter from 'vue-router'
import account from './main/Account.vue'
import goodslist from './main/Goodslist.vue'

//导入Account的两个子组件
import login from './subcom/login.vue'
import register from './subcom/register.vue'

//3.创建路由对象
var  router=new VueRouter({
    routes:[
        //account goodslist
        {path:"/account",component:account,
        children:[
            {path:'login',component:login},
            {path:'register',component:register}
        ]
    },
        {path:"/goodslist",component:goodslist}
    ]
}) 

export default router//把路由对象到处去