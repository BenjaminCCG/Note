//概念:
//vuex是vue配套的公共数据管理工具，他可以把一些共享的数据保存到vuex中，方便整个程序中的任何组件直接获取或修改我们的公共数据
// Vuex是为了保存组件之间共享数据而诞生的，如果组件之间又要共享的数据，可以直接挂载到vuex中，而不必通过父子组件之间传值了，如果组件的数据不需要共享，此时这些不需要共享的私有数据，没有必要放到vuex中
//只有共享的数据,才有权利放到vuex中
//组件内部私有的数据，只要放到组件的data中即可
//props(父组件传来的数据)和data(私有数据)和vuex(组件的共享数据)的区别

//根据刚才的描述，我们可以的得到一个结论:
// Vuex是一个全局的共享数据存储区域，就相当于是一个数据的仓库

//安装  cnpm i vuex --save
//import Vuex from 'vuex'
//Vue.use(Vuex)

const store=new Vue.Store({
    state:{//相当于data

    },
    mutations:{//相当于methods
        
    }
})