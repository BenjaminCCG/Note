<template>
    <div class="wrapper" @click='back'>        
         <swiper :options="swiperOption">
            <swiper-slide class="img"><img src="http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg"></swiper-slide>
            <swiper-slide class="img"><img src="http://img1.qunarzz.com/sight/p0/1709/76/7691528bc7d7ad3ca3.img.png_800x800_9ef05ee7.png"></swiper-slide>            
        </swiper>
        <div class="swiper-pagination"></div>
    </div>
</template>
<script>
export default {
    name:'Gallery',
    data() {
        return {
            swiperOption:{
                pagination:{
                    el:'.swiper-pagination',
                    type:'fraction',
                    observeParents: true,
                    observer: true
                }
            }
        }
    },
    methods: {
        back(){
            this.$emit('change')
        }
    },
}
</script>
<style lang="less" scoped>
  .wrapper /deep/ .swiper-container{
       overflow:hidden
  }
   
    .wrapper{
        position: absolute;
        z-index: 9;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        background-color: #000;
        overflow: hidden;
        display: flex;
        align-items: center;
        .img{
            height: 0;
            overflow: hidden;
            padding-bottom: 55%;
            img{
                width: 100%;
            }
        }
        .swiper-pagination{
            color:#fff;
            position: absolute;
            bottom: 3rem;
        }
    }
</style>
