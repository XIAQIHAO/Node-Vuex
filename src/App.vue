<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
 import 'bootstrap/dist/css/bootstrap.css'
  import 'jquery/dist/jquery'
export default {
  name: "App"
};
</script>

<style>
.swiper-pagination-bullet-active{
    background-color: orange !important;
}
#app{
  height: 1800px;
  
}
</style>
