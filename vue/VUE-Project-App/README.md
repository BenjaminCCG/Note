# VUE模仿去哪儿移动端项目
## 项目中使用vue-awesome-swiper、better-scroll控件，其中better-scroll在使用过程中出现，绑定的对象元素，在进行点击事件时无效，需要配置 {click:true}
## 当使用keep-alive标签，进行路由跳转不会对已加载文件进行再次加载，如果某一页面需要加载，可以通过组件的name,在keep-alive标签设置exclude属性
## 兄弟组件传值，方式一:子传父，父再传子 方式二:bus方式,组件A通过$emit传递值，组件B再通过$on的方式接收值
## 需注意通过v-for渲染添加的ref属性，进行访问时，this.$refs[xxx]此时是一个长度为1的数组，所以访问dom对象要加上[0]

