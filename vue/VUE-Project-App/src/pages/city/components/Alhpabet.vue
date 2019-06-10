<template>
    <div>
       <ul>
           <li v-for='(item,key) in cities'
            :key='key'  :ref='key'
           @click='handleClick'
           @touchstart='handleStart'
           @touchmove='handleMove'
           @touchend='handleEnd'
           >{{key}}</li>         
       </ul>
    </div>
</template>
<script>
// import event from '@/store/bus.js'
export default {
    props:['cities'],
    data() {
        return {
            letter:'',
            bool:false
        }
    },
    computed: {
        item(){
            // return [].map.call(Object.keys(this.cities),function(item){
            //     return item
            // })
            return [...Object.keys(this.cities)]
        }
    },
    methods: {
        handleClick(e){
            this.letter=e.target.innerText
            this.bus.$emit('change',this.letter)
        },
        handleStart(){
            this.bool=true 
        },
        handleMove(e){
            if(this.bool){
                let top=this.$refs.A[0].offsetTop+75
                let touchTop=e.touches[0].clientY               
                let index=Math.floor((touchTop-top)/20)
                if(index<0){
                    index=0
                }else if(index>21){
                    index=21
                }
                this.letter=this.item[index]
                console.log(this.letter);
                this.bus.$emit('change',this.letter)
                
                
            }
        },
        handleEnd(){
            this.bool=false
        }
    },
}
</script>
<style lang='less' scoped>
    ul{
        position: absolute;
        top: 1.6rem;
        right: 0;
        bottom: 0;
        display: flex;
        flex-direction:column;
        justify-content: center;
        width: .4rem;
        text-align: center;
        color: #00bcd4;
        li{
            line-height: .4rem;
        }
    }
</style>