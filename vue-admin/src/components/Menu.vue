<template>  
    <div class="nav-menu">
      <div class="github"></div>
      <el-menu class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" router :default-active="active">
        <el-submenu :index="item.path" v-for="(item,index) in menuList" :key="index" v-if="item.children">
          <template slot="title"><i class="el-icon-message"></i>{{ item.name }}</template>
          <el-menu-item-group>
            <el-menu-item :index="child.path" v-for="(child,key) in item.children" :key="key">{{ child.name }}</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item :index="item.path" v-for="(item,index) in menuList" :key="index" v-if="!item.children">
          <i class="el-icon-message"></i>{{item.name}}
        </el-menu-item>
      </el-menu>
    </div>
</template>

<script>
export default {
  name: 'Menu',
  data () {
    return{
      menuList:[
      {
        name:'首页',
        path:'/',
        children: [
        {
          path: '/welcome',
          name: '欢迎进入'
        },
        {
          path: '/info',
          name: '网站信息'
        },
        {
          path: '/manage',
          name: '账号管理'
        }
        ]
      },
      {
        path: '/article',
        name: '文章管理',
        children: [
        {
          path: '/list',
          name: '文章列表'
        },
        {
          path: '/add',
          name: '发布文章'
        }
        ]
      },
      {
        path: '/tag',
        name: '分类管理'
      },
      {
        path: '/links',
        name: '友情链接'
      }
      ],
      active:'/welcome'
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  watch: {
     $route(){
      this.active=this.$route.path
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

.nav-menu{
  width: 200px;
  height: 100%;
  position: relative;
  background-color:#fff;
  padding-top:50px;
  margin-top:40px;
  .el-menu{
    background-color:#fff;
  }
  .github{
    height:61px;
    width:80%;
    background:linear-gradient(90deg,#40dcb2,#40dc7e);
    border-radius:5px;
    position:absolute;
    top:-15px;
    left:50%;
    margin-left:-80px;
    z-index:999
  }
}
</style>
