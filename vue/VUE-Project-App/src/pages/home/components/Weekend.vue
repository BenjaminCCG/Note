<template>
    <div>
        <div  class="recommend">周末去哪</div>
        <ul>
            <li class="border-bottom" v-for='item in list' :key='item.id'>
                <div class="img"><img :src="item.imgUrl" alt=""></div>
                <div class="word">
                    <p class="title">{{item.title}}</p>
                    <p class="desc">{{item.desc}}</p>                    
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name:'HomeWeekend',
    props:{
      list:Array
    }    
}
</script>
<style lang='less' scoped>
    @import '~less/mixins.less';
    .recommend{
        line-height: .8rem;
        background-color: #eee;
        padding-left:.2rem;
    }
    .img{
        overflow: hidden;
        height: 0;
        padding-bottom: 38%;
        img{
            width: 100%;
        }
    }
    .word{
        padding: 0 .1rem;
        line-height: .54rem;
        .title{
            font-size: .32rem;
        }
        .desc{
            color: #ccc;
            @ellipsis();
        }
    }
</style>