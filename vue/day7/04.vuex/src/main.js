//入口文件
import Vue from 'vue';
//配置vuex的步骤
//1.运行cnpm i vuex -S
//2.导入包
import Vuex from 'vuex'
//3.注册vuex到vue中
Vue.use(Vuex)
//4.new Vuex.store()实例，得到一个数据仓储对象
var store =new Vuex.Store({
    state:{
        count:0
        //如果在组建中，想要访问store中的数据，只能通过this.$store.state.***来访问
    },
    mutations:{
        //注意:如果要操作store中的state值，只能通过调用mutations提供的方法，才能操作对应的数据，不推荐直接操作state中的数据，因为万一导致了数据的紊乱，不能快速定位到错误的原因，因为每个组件都可能有操作数据的方法
        increment(state){
            state.count++
        },
        //注意:如果组件想要调用mutations中的方法，只能使用this.$store.commit('方法名')
        //这种调用mutations方法的格式和this.$emit("父组件中的方法名")类似
        subtract(state,obj){
            //注意:mutations的函数参数列表中，最多支持两个参数，其中参数1:是state状态
            //参数2:通过commit提交过来的参数
            state.count-=(obj.c+obj.d)
        }
    },
    getters:{
        //注意:这里的getters只负责对外提供数据，不负责修改数据，如果想要修改state中的数据，请去找mutations
        optCount:function(state){
            return '当前最新的count值是：'+state.count
        }
        //经过咱们回顾对比，发现getters中的方法和组件中的过滤器比较类似，因为过滤器和getters都没有修改原数据，都是把原数据做了一层包装，提供给了调用者
        //其次，getters也和computed比较像，只要state中的数据发生变化了，那么如果getters正好也引用了这个数据，那么就会立即触发getters的重新求值
    }
})

//总结:
//1.state中的数据不能直接修改，如果想要修改必须通过mutations
//2.如果组件想要直接从state上获取数据:需要this.$store.state.***
//3.如果组件想要修改数据，必须使用mutations提供的方法，需要通过this.$store.commit('方法的名称'，唯一的参数)
//4.如果store中的state上的数据，在对外提供的时候，需要做一层包装，那么推荐使用getters，如果需要使用getters，则用this.$store.getters.***



import App from './app.vue'

const vm=new Vue({
    el:"#app",
    render:c=>c(App),
    store//5.将vuex创建的store挂载到vm实例上，只要挂载到了vm上，任何组件都能使用store来存取数据
})