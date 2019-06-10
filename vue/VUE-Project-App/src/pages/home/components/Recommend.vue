<template>
    <div>
        
            <div  class="recommend">热销推荐</div>
        <ul>
            <router-link class="border-bottom"  
            v-for='item in list' :key='item.id' 
            tag="li" :to="'/detail/'+item.id">
                <img :src="item.imgUrl" alt="">
                <div>
                    <p class="title">{{item.title}}</p>
                    <p class="desc">{{item.desc}}</p>
                    <button>查看详情</button>
                </div>
            </router-link>
        </ul>
        
    </div>
</template>
<script>
export default {
    name:'HomeRecommend',
    props:{
      list:Array
    },   
}
</script>
<style lang='less' scoped>
    @import '~less/mixins.less';
    .recommend{
        line-height: .8rem;
        background-color: #eee;
        padding-left:.2rem;
    }
    li{
        display: flex;
        padding: 0.1rem;
        img{
            width: 1.7rem;
            height: 1.7rem;
        }
        div{
            flex: 1;
            padding-left: 0.2rem;
            line-height: 2em;
            overflow: hidden;
            .title{
                font-size: .32rem;
            }
            .desc{
                color: #ccc;
                @ellipsis();
            }
            button{
                color: #fff;
                background-color: #ff9300;
                padding: 0 .2rem;
                border-radius: .06rem;
            }
        }
    }
</style>