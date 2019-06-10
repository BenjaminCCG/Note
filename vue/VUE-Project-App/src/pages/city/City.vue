<template>
    <div>
        <city-header></city-header>
        <city-search :cities='cities'></city-search>
        <city-list :hotCities='hotCities' :cities='cities'></city-list>
        <city-alhpabet :cities='cities'></city-alhpabet>
    </div>
</template>
<script>
    import axios from 'axios'
    import CityHeader from './components/Header'
    import CitySearch from './components/Search'
    import CityList from './components/List'
    import CityAlhpabet from './components/Alhpabet'
    
export default {
    data() {
        return {
            hotCities:[],
            cities:[],
            // letter:''
        }
    },
    components:{
        CityHeader,
        CitySearch,
        CityList,
        CityAlhpabet
    },
    methods: {
        getList(){
           axios.get('../../static/city.json').then(res=>{
               res=res.data;
               let data=res.data;
               this.hotCities=data.hotCities;
               this.cities=data.cities               
           }) 
        },
        // getIndex(){
        //     this.bus.$on('change',msg=>{
        //         this.letters=msg
        //     })
        // }
    },
    mounted() {
        this.getList()
        // this.getIndex()
    },

}
</script>
<style>
</style>