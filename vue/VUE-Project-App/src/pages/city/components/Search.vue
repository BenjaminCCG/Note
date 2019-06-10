<template>
    <div class="wrapper">
        <div class="search">
        <input type="text" placeholder="输入城市名或拼音" v-model='search'>
        </div>
        <ul  v-show='searchshow'>
            <li v-for='item in list' :key='item.id' @click='change(item.name)' >{{item.name}}</li>
            <li v-show='show'>没有找到匹配数据</li>           
        </ul>        
         
    </div>
</template>
<script>
export default {
    props:['cities'],
    data() {
        return {
            search:'',
            list:[]
        }
    },
    watch: {
        search(){
            this.list=[]
            for(let i of Object.values(this.cities)){                
                i.forEach(item=>{
                    if(item.spell.includes(this.search)||item.name.includes(this.search)){
                        console.log(this.search);                        
                        this.list.push(item)
                    }
                })
            }

            // this.list = []
            // for (let i in this.cities) {
            //     this.cities[i].forEach((item) => {
            //     if (item.spell.includes(this.search) ||
            //         item.name.includes(this.search)) {
            //         this.list.push(item)
            //     }
            //     })
            //  }
         
        }
    },
    computed: {
        show(){
            return !this.list.length
        },
        searchshow(){
            return this.search.length
        }
    },
    methods: {
        change(msg){
            this.$store.commit('changeCity',msg)
            this.$router.push('/')
        }
    },
}
</script>
<style lang='less' scoped>
   
    .search{
        height: .72rem;
        padding: 0 .1rem;
        background-color: #00bcd4;
        input{
            width: 100%;
            box-sizing: border-box;
            text-align: center;
            padding: 0 .1rem;
            border-radius: .06rem;
            line-height: .62rem;
        }
    }
    ul{
        position: absolute;
        top: 1.6rem;
        left: 0;
        right: 0;
        bottom:0;
        background:#eee;
        z-index: 99;
        overflow: hidden;
        li{
          line-height: .76rem;
          padding-left: .2rem;
          border-bottom: 1px solid #ccc;
          background-color: #fff;  
        } 
    }
</style>