<template>
    <div class="wrapper" ref='wrapper'>
        <div class="list">
            <div class="area">
                <div class="title">当前城市</div>
                <div class="city">
                    <div class="city-wrap">
                        <button>{{this.$store.state.city}}</button>
                    </div>
            </div>
            </div>
            <div class="area">
                <div class="title">热门城市</div>
                <div class="city">
                    <div class="city-wrap" v-for='item in hotCities' :key='item.id'>
                        <button @click='change(item.name)'>{{item.name}}</button>
                    </div>
            </div>
            </div>
            <div class="area"  v-for='(item,key) in cities' :key='key' :ref='key'>
                <div class="title">{{key}}</div>
                <ul class="city-list">
                    <li class="border-bottom" v-for='cityitem in item' :key='cityitem.id' @click='change(cityitem.name)'>{{cityitem.name}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import BScroll from 'better-scroll'
// import event from '@/store/bus.js'
export default {
    props:['cities','hotCities'],
    data() {
        return {
            // scroll:null
            letter:''
        }
    },
    methods: {
        change(msg){
            this.$store.commit('changeCity',msg)
            this.$router.push('/')
        },
        getIndex(){
            this.bus.$on('change',msg=>{
                this.letter=msg
            })
        }
    },
    created() {
       this.getIndex()
    },
    mounted() {
        this.scroll=new BScroll(this.$refs.wrapper, {click: true})
         
    },
    watch: {
        letter(){
            this.scroll.scrollToElement(this.$refs[this.letter][0])            
        }
    },
    
}
</script>
<style lang='less' scoped>
  .wrapper{
       overflow: hidden;
       position: absolute;
       top: 1.6rem;
       left: 0;
       right: 0;
       bottom: 0;
  }
  .title{
      background-color:#eee;
      padding-left: .2rem; 
      line-height: .44rem;
  }
  .city{
      padding:.1rem .6rem .1rem .1rem;
      display: flex;
      flex-wrap: wrap;     
      .city-wrap{
          width: 33.3%;
          padding: .1rem;
          box-sizing: border-box;
          button{
              width: 100%;
              box-sizing: border-box;
              border: .02rem solid #ccc;
              background-color: #fff;
              padding: .04rem 0;
              border-radius: .06rem;       
          }
      }
  }
  .city-list{
      li{
          padding-left: .2rem;
          line-height: .76rem;
          border-bottom: 1px solid #eee;
      }
     
  }
</style>