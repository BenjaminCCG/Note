<template>
    <div class="wrapper">
      <swiper :options="swiperOption">
        <swiper-slide v-for='item in list' :key='item.id'>
          <img :src="item.imgUrl">
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>       
      </swiper>
    </div>
</template>
<script>
export default {
    name:'HomeSwiper',
    props:{
      list:Array
    },
    data() {
        return {
            swiperOption: {
        pagination: '.swiper-pagination',
        pagination: {
          el: '.swiper-pagination'
        },
        loop: true,
        autoplay: true
      }
        }
    },
}
</script>
<style lang='less' scoped>
    .wrapper /deep/ .swiper-pagination-bullet-active {
    background: #fff
  }
    .wrapper{
        overflow: hidden;
        height: 0;
        padding-bottom: 32%;
        img{
            width: 100%;
        }
    }
</style>