<template>
    <div class="icons">        
        <swiper>
            <swiper-slide v-for="(page,index) in pages" :key='index'>
                <div class="icon" v-for='item in page' :key='item.id'>
                    <img  :src="item.imgUrl" alt="">
                    <p>{{item.desc}}</p>
                </div>
            </swiper-slide>              
      </swiper>
    </div>
</template>
<script>
export default {
    name:'HomeIcons',
    props:{
      list:Array
    },
    data(){
        return{
            
        }
    },
    computed: {
        pages(){
            const pages=[];
            this.list.forEach((item,index)=>{
                let page=Math.floor(index/8)
                if(!pages[page]){
                    pages[page]=[]
                }
                pages[page].push(item)
            })
            return pages
        }
    },
}
</script>
<style lang='less' scoped>
@import '~less/mixins.less';
    .icons{
        overflow: hidden;
        width: 100%;
        height: 0;
        padding-bottom: 50%;
        margin: .2rem 0;
        .icon{
            display: inline-block;
            width: 25%;
            height: 0;            
            padding-bottom: 25%;
            text-align: center;
            img{
                width: 65%;  
                padding: 0.08rem;              
            }
            p{
                padding-top: 3px;
                @ellipsis()
            }
        }
    }
</style>