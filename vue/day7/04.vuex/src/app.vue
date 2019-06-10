<template>
    <div>
        <h1>这是App组件</h1>



        <counter></counter>
         <hr>
        <amount></amount>
    </div>    

    
</template>
<script>
import counter from './components/counter.vue'
import amount from './components/amount.vue'
export default {
    data(){
        return {}
    },
    components:{
        counter,
        amount
    }
}
</script>
<style lang="less" scoped>

</style>
