import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/view/Index'
import Links from '@/view/Links'
import Article from '@/view/Article'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/links',
      name: 'Links',
      component: Links
    },
    {
      path: '/article/:id',
      name: 'Article',
      component: Article
    }
  ]
})
