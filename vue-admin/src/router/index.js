import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'
import Login from '@/view/login'
import Index from '@/view/index'
import Welcome from '@/components/welcome'
import Info from '@/components/info'
import Manage from '@/components/manage'
import List from '@/components/list'
import Add from '@/components/add'
import Edit from '@/components/edit'
import Tag from '@/components/tag'
import Links from '@/components/links'
Vue.use(Router)

const routes = [
    {
      path: '/login',
      component: Login
    },
    {
      path: '/',
      name: '首页',
      meta: {
        requireAuth: true, 
      },
      redirect: '/welcome',
      component: Index,
      children: [
    		{
    			path: '/welcome',
    			name: '欢迎进入',
          meta: {
            requireAuth: true,
          },
    			component: Welcome
    		},
    		{
    			path: '/info',
    			name: '网站信息',
          meta: {
            requireAuth: true,
          },
    			component: Info,
    		},
    		{
    			path: '/manage',
    			name: '账号管理',
          meta: {
            requireAuth: true,
          },
    			component: Manage
    		},
        {
          path: '/list',
          name: '文章列表',
          meta: {
            requireAuth: true,
          },
          component: List
        },
        {
          path: '/add',
          name: '发布文章',
          meta: {
            requireAuth: true,
          },
          component: Add
        },
        {
          path: '/edit/:id',
          name: 'edit',
          meta: {
            requireAuth: true,
          },
          component: Edit
        },
        {
          path: '/tag',
          name: '标签管理',
          meta: {
            requireAuth: true,
          },
          component: Tag
        },
        {
          path: '/links',
          name: '友情链接',
          meta: {
            requireAuth: true,
          },
          component: Links
        }
		  ]
    }
  ]


if (window.localStorage.getItem('TOKEN')) {
    store.commit('getToken', JSON.parse(window.localStorage.getItem('TOKEN')))
}

const router = new Router({
    routes
});

router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
        if (store.state.username) {  // 通过vuex state获取当前的token是否存在
            next();
        }
        else {
            next({
                path: '/login',
                query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
            })
        }
    }
    else {
        next();
    }
})

export default router;