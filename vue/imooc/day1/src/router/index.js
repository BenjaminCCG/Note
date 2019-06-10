import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hello from '@/components/Hello'
import World from '@/components/World'
import HelloLink from '@/components/HelloLink'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      children: [
        {path: 'hello',
          name: 'Hello',
          component: Hello
        },
        {path: 'world', name: 'World', component: World}
      ]
    },
    {path: '/hello/hellolink', component: HelloLink}
    // ,
    // {
    //   path: '/hello',
    //   name: 'Hello',
    //   component: Hello
    // },
    // {
    //   path: '/world',
    //   name: 'World',
    //   component: World
    // }
  ]
})
