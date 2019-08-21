<template>
  <div class="hello">
   
    <div class="list-group" v-for="(item,index) in List" :key="index">
      <a href="#" class="list-group-item list-group-item-success" v-for='(items,i) in List[index]' :key="i">{{items}}</a>
     
    </div>
    <p>
      <el-button
        type="primary"
        @click="openFullScreen"
        v-loading.fullscreen.lock="fullscreenLoading"
      >指令方式</el-button>
    </p>
  </div>
</template>

<script>
import { getDate } from "@/api";
import {mapState,mapMutations,mapActions} from 'vuex'
export default {
  name: "HelloWorld",
  data() {
    return {
      fullscreenLoading: false,
      message: []
    };
  },
  methods: {
    openFullScreen() {
      const loading = this.$loading({
        lock: true,
        text: "Loading",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)"
      });
      setTimeout(() => {
        loading.close();
        this.$router.push("/HelloHome");
        // this.$store.commit("getmes",this.message);
        this.getmes(this.message)
        //  this.$store.dispatch("getone",this.message)
        this.getone(this.message);
      
      }, 800);
    },
    async getDates() {
      let {
        data: { message }
      } = await getDate();
      this.message = message;
      
     
    },
    ...mapActions(['getone']),
    ...mapMutations(['getmes'])

  },
  activated() {
    this.getDates();
   
  },
 
  computed:{
    List(){
      let list = []
      this.message.forEach((item,index)=>{
        let page = ~~(index/4)
        if(!list[page]){
          list[page] = []
        }
        list[page].push(item)
      })
      return list
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
