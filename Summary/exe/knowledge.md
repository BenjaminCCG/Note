# Day 1
 + 插值表达式{{}}
 + v-text v-html
 + v-bind : v-on @
 + v-if v-show v-for
 + :color :style
  
# Day 2
 + Vue.directive
   - 私有指令 : direcitves:{}
   - bind   inserted   updated
 + Vue.filter
   - 私有过滤器 : filters:{}
 + Vue.resource
   - this.$http.get/post(url).then(res)
 + 生命周期函数
  1. beforeCreate()
  2. created()
  3. beforeMount()
  4. mounted()
  5. beforeUpdate()
  6. updated()
  7. beforeDestroy()
  8. destroyed()

# Day 3
 + 通过用transition包括需要动画的元素，如果是v-for渲染的元素则需要用transform-group进行包裹
 + v-enter,v-leave-to  v-enter-active,v-leave-active
 + 自定义V-前缀，给transition加上name属性
 + 动画的钩子函数:before-enter enter after-enter
 + v-move appear tag   mode
 + Vue.component   template   components 组件
 + v-if v-else <component>   组件切换 :is

# Day 4
 + 父组件向子组件传值 子组件使用:变量接收父组件参数,再从props里访问，不能修改
 + 父组件向子组件传递方法同样如此，此时可利用方法访问子组件的参数，并将值返回传到父组件
  - this.$emit(fun,data)
 + ref访问dom元素的属性与方法 this.$refs.refname.pro..
 + 路由 new VueRouter  routes:[{path:,redirect},{path,component}] linkActiveClass设置激活css
 + $route.query访问?查询字符串  $route.params访问/
 + 路由嵌套 children:[{}]

# Day 5
 + watch监视data中的数据变化
 + watch监视$route.path的路由地址变化
 + computed:计算属性只要data中任何数据发生变化,调用时当成普通数据使用，计算属性一定要return