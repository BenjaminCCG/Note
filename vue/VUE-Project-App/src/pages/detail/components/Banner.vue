<template>
    <div class="container">
        <div  class="wraper" @click='togallery'>        
            <div class="banner-img">
            <img src="http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg" alt="">
            </div>
            <div class="banner-title">
                <div class="title-left">大连圣亚海洋世界(AAAA景区)</div>
                <div class="title-right"><span class="iconfont">&#xe632;</span>39</div>
            </div>                 
        </div>
        <transition>
            <gallery v-show='show' @change='change'></gallery> 
        </transition>
        
    </div>
</template>
<script>
import Gallery from '@/pages/common/gallery'
export default {
    name:'DetailBanner',
    data() {
        return {
            show:false
        }
    },
    components:{
        Gallery
    },
    methods: {
        togallery(){
            this.show=true
        },
        change(){
            this.show=false
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
    .wraper{
        position: relative;
        .banner-img{
            height: 0;
            overflow: hidden;
            padding-bottom: 55%;
            img{
                width: 100%
            }
        }
        .banner-title{
            width: 100%;
            box-sizing: border-box;
            position: absolute;
            bottom: 0;
            left: 0;
            color: #fff;
            display: flex;
            font-size: .32rem;
            line-height: .5rem;
            padding: 0 .2rem;
            justify-content: space-between;
            background-image: linear-gradient(to bottom,rgba(0,0,0,0), rgba(0,0,0,0.8));
            .title-right{
                font-size: .2rem;
                span{
                  font-size: .2rem;  
                }
            }
        }
    }
</style>