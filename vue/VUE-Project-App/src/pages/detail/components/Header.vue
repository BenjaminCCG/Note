<template>
    <div class="wrapper">      
            <router-link class="circle" v-show='!show'   to='/'><span class="iconfont">&#xe624;</span></router-link>
            <div class="header"  v-show="show" :style='obj'>
            <router-link class="iconfont" to='/'>&#xe624;</router-link >
            城市选择
            </div>              
    </div>
</template>
<script>
export default {
    data() {
        return {
            show:false,
            obj:{opacity:0}
        }
    },
    mounted() {
        window.addEventListener('scroll',this.scroll)
    },
    destroyed() {
        window.removeEventListener('scroll',this.scroll)
    },
    methods: {
        scroll(){
            let top=document.documentElement.scrollTop;
            let opacity=top/140;
            opacity=opacity>1?1:opacity
            this.obj={
                opacity:opacity
            }
            this.show=top
            console.log(top);
            
        }
    },
}
</script>
<style lang='less' scoped>
    .v-enter,.v-leave-to{
        opacity: 0;
    }
    .v-enter-active,.v-leave-active{
        transition: all .5s;
    }
    .wrapper{
        position: fixed;
        z-index: 6;
        width: 100%;
        top: 0;
        left: 0;
        .header{
        line-height: .88rem;
        background-color: #00bcd4;
        color: #fff;
        text-align: center;
        position: fixed;
        font-size: .32rem; 
        width: 100%;
        .iconfont{
            position: absolute;
            left: .15rem;
            color: #fff;            
            }
        }
        .circle{
            width: .8rem;
            height: .8rem;
            border-radius: 50%;
            background-color: rgba(0,0,0,0.8);
            line-height: .8rem;
            text-align: center;
            position: absolute;
            top: .2rem;
            left: .2rem;
            .iconfont{
                color: #fff;
            }
        }
    }
</style>