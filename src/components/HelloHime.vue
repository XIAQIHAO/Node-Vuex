<template>
    <div class="home">
     <div class="list-group">
  <a href="#" class="list-group-item" v-for="(item,index) in mesList" :key="index" :class="{active:!index}">
    {{item}}
  </a>

</div>
 <el-button
    type="primary"
    @click="openFullScreen"
    v-loading.fullscreen.lock="fullscreenLoading">
    表单
  </el-button>
    </div>
</template>
<script>
export default {
    data(){
        return{
             fullscreenLoading: false,
             mesList:[]
        }
    },
    methods:{
    
  openFullScreen() {
        const loading = this.$loading({
          lock: true,
          text: 'Loading',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        });
        setTimeout(() => {
          loading.close();
           this.$router.push("/UserList")
           
        }, 800);
      },
  },
  activated(){
   
      this.mesList = this.$store.state.List
  }
    
}
</script>
<style scoped>

</style>