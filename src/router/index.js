import Vue from 'vue'
import Router from 'vue-router'
import AreaListView from '@/components/AreaListView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AreaListView',
      component: AreaListView
    }
  ]
})
