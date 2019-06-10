<template>
    <div class="header">
        <div class="header-left">
            <span class="iconfont">&#xe624;</span>
        </div>
        <div class="header-center"><span class="iconfont">&#xe632;</span>输入城市/景点/游玩主题</div>
        <router-link to='/city' class="city">
            <div class="header-right">{{this.$store.state.city}}<span class="iconfont">&#xe614;</span></div>
        </router-link>
        
    </div>
</template>
<script>
export default {
    data() {
        return {
            
        }
    },
}
</script>
<style lang="less" scoped>
  @import '~less/varibles.less';
    .city{
        color: #fff;
    }
    .header{
        height: .86rem;
        line-height: .86rem;
        // background :#00bcd4;
        background : @bgcolor;
        display: flex;
        justify-content: space-around;
        align-content: center;
        text-align: center;
        color:#fff;
        .header-left{
            width: .64rem;
            font-size: .4rem;
        }
        .header-center{
            flex:1;
            height: .64rem;
            background: #fff;
            margin-top: .12rem;
            margin-left: .2rem;
            border-radius: .1rem;
            color: #ccc;
            text-align: left;
            line-height: .64rem;
            padding-left: .2rem;
        }
        .header-right{
            width: 1.04rem;
            padding: 0 .04rem;            
        }
    }
</style>