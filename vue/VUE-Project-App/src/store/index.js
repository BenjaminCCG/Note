import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        city:localStorage.city||'北京'
    },
    mutations:{
        changeCity(state,newCity){
            localStorage.city=newCity;
            state.city=localStorage.city
        }
    }
})
  