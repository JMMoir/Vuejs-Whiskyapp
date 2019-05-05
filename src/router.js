import Vue from 'vue';
import Router from 'vue-router';

import WhiskyView from '@/views/WhiskyViews'
import MoreView from '@/views/MoreView'

Vue.use(Router);

export const router = new Router({
  routes:[
    {
      path:'/',
      name: 'whiskies',
      component: WhiskyView
    },
    {
      path:'/more',
      name:'more',
      component: MoreView,
      props: true
    }
  ]
})
