<template>
    <div>
        <h1>这是Account组件</h1>
        <router-link to="/account/login">登录</router-link>
        <router-link to="/account/register">注册</router-link>

        <router-view></router-view>
    </div>
</template>
<script>
export default {
    
}
</script>

<style lang="less" scoped>
/* 普通的style标签只支持普通的样式，如果想要启用scss或者less需要为 style元素设置lang属性 */
// 只要style标签是在.vue组件中定义的，那么推荐都为style开启scoped属性
    body{
        div{
            font-style: italic
        }
    }
</style>

