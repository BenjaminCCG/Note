<template>
    <div>
    <div
      class="item"
      v-for="(item, index) of list"
      :key="index"
    >
      <div class="item-title border-bottom">
        <span class="item-title-icon"></span>
        {{item.title}}
      </div>
      <div v-if="true">
        <!-- <detail-list :list="item.children"></detail-list> -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
    name:'DetailList',
    data() {
        return {
            list:[
                {title:'成人票',
                children:[{title : '成人三馆联票'}]},
                {title:'学生票'}
            ]
        }
    },

}
</script>
<style lang="less" scoped>
    
        .item{
            padding: 0 .2rem;
            line-height: .8rem;
            border-bottom: 1px solid #eee;
            .item-title-icon{
                display: inline-block;
                width: .36rem;
                height: .36rem;
                background: url("http://s.qunarzz.com/piao/image/touch/sight/detail.png") 0 -0.45rem no-repeat;
                background-size:.4rem 3rem;
                vertical-align: middle;
            }
        }
    
</style>

