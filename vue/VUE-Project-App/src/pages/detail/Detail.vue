<template>
    <div>
        <detail-banner></detail-banner>
        <detail-header></detail-header>
        <detail-list></detail-list>
        <div class="height">
            
        </div>
    </div>
</template>
<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
export default {
    data() {
        return {
            
        }
    },
    components:{
        DetailBanner,
        DetailHeader,
        DetailList
    }
}
</script>
<style lang='less' scoped>
    .height{
        height: 2000px;
    }
</style>