<template>
  <div id="app">
    <router-view></router-view>
    <mobile-menu :class="{show: isShow}"></mobile-menu>
    <div class="cover" v-show="isShow" @click="showMenu()"></div>
    <div class="menu-button" @click="showMenu()">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-caidan"></use>
      </svg>
    </div>
  </div>
</template>

<script>
import MobileMenu from '@/components/MobileMenu'
export default {
  name: 'app',
  data(){
    return{
      isShow:false
    }
  },
  components:{
    MobileMenu
  },
  methods:{
    showMenu(){
      this.isShow=!this.isShow;
      document.querySelector("html").classList.toggle('ovfHiden');
    }
  }
}
</script>

<style lang="scss">
*{
  margin:0;
  padding:0;
}
@font-face{
  font-family: exo;
  src: url('./../static/Exo-Regular.otf');
  font-weight: 600;
}
html,body{
  width: 100%;
  height:100%;
  background:#f2f5f7;
  font-family: exo;  
  color: #2a2a2a;
}
::selection{
  background-color: #98e1f2;
  color:#fff;
}
::-moz-selection{
  background-color: #98e1f2;
  color:#fff;
}
ul{
  list-style: none;
}
#app {
  width: 100%;
}
.show{
  left:0!important;
}
.menu-button{
  position: fixed;
  top:8px;
  left:8px;
  .icon{
    width: 30px;
    height: 30px;
    fill: #fff;
    overflow: hidden;
  }
}
.cover{
  top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  background:rgba(0,0,0,0.3);
  position:fixed;
}
.ovfHiden{
  overflow: hidden;
}
</style>
