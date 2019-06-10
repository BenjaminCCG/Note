<template>
    <div>
        <router-link to="/hello">to Hello</router-link>
        <router-link to="/world">to World</router-link>
        <router-view></router-view>
        <!-- <a href="" @click.prevent="componentId='hello'">hello</a>
        <a href="" @click.prevent="componentId='world'">world</a> -->
        <!-- <transition mode='out-in'>
            <component :is="componentId"></component>
        </transition> -->
    </div>
</template>
<script>
    let hello={
        template:'<h1>hello template</h1>'
    }
    let world={
        template:'<h1>world template</h1>'
    }
export default {
    data(){
        return{
            // componentId:'hello'
        }
    },
    components:{
        hello,
        world
    }
    
}
</script>
<style>
    /* .v-enter,.v-leave-to{
        opacity: 0;
    }
    .v-enter-active,.v-leave-active{
        transition: all .5s;
    } */
</style>