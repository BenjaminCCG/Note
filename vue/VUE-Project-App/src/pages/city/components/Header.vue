<template>
    <div class="header">
        <router-link class="iconfont" to='/'>&#xe624;</router-link >
        城市选择
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang='less' scoped>
    .header{
        line-height: .88rem;
        background-color: #00bcd4;
        color: #fff;
        text-align: center;
        position: relative;
        font-size: .32rem; 
        .iconfont{
            position: absolute;
            left: .15rem;
            color: #fff;            
        }
    }
</style>