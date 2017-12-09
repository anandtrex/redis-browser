import Vue from 'vue'
import Router from 'vue-router'
import RedisView from '../components/RedisView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'redis-view',
      component: RedisView
    }
    // {
    //   path: '*',
    //   redirect: '/'
    // }
  ]
})
