<template>
    <div>
        <h1>这是APP组件</h1>
         <mt-button type="danger" icon="back" @click='show'>default</mt-button>

         <mt-button type="danger" size="large" plain>default</mt-button>

         <mt-button type="danger" size="samll" disabled>default</mt-button>
         
         <button type="button" class="mui-btn mui-btn-royal">
			紫色
		</button>

        <router-link to="/account">Account</router-link>
        <router-link to="/goodslist">Account</router-link>

        <router-view></router-view>
    </div>
</template>
<script>
// 按需导出Toast组件
import {Toast} from 'mint-ui'
export default {
    data(){
        return {
             toastInstance: null
        }
    },
    created(){
        this.getList()
    },
    methods:{
        getList(){
            //模拟获取列表的一个AJax方法
            //在获取数据之前，立即弹出Toast提示用户，正在加载数据
            this.show()
            setTimeout(() => {
                //当3秒过后，数据获取回来把Toast移除
                this.toastInstance.close()
            }, 3000);
        },
        show(){
            this.toastInstance= Toast({
                 message:"这是消息",
                 iconClass:"glyphicon glyphicon-ok",//设置图标的类
                 position:"top",
                 duration:3000,
                 className:"mint-toast-icon"//自定义Toast的样式，需要自己提供一个类名
             })
        }
    }
}
</script>
<style>

</style>


