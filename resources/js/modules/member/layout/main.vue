<template>
     <div class="container">
         <div><SideBar :menu="menu" /></div>
         <div class="body">
             <router-view></router-view>
         </div>
     </div>
</template>

<script>

import SideBar from "./../../../components/SideBar";
import menu from "./../menu";

export default {
  components:{
      SideBar,
  },
  data(){
      return {
          menu
      }
  }
}
</script>

<style lang="scss" scoped>
  .container{
      display: flex;
      /* padding:10px 20px; */
      position: relative;

      .body{
          flex:1;
          background: #fff;
          margin-left: 20px;
          border-radius: 10px;
          padding: 20px;
          overflow: auto;
      }
  }
</style>