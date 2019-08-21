<template>
  <div class="user-list">
    <div class="container">
      <table class="table table-bordered table-warning">
        <thead>
          <th>姓名</th>
          <th>性别</th>
          <th>年龄</th>
          <th>班级</th>
          <th>爱好</th>
        </thead>
        <tbody>
          <tr v-for="(item,index) in userlist" :key="index">
            <td>{{item.username}}</td>
            <td>{{item.sex}}</td>
            <td>{{item.age}}</td>
            <td>{{item.class}}</td>
            <td>{{item.like}}</td>
          </tr>
        </tbody>
      </table>

      
    </div>
    <button class="btn btn-primary" @click="alluser">全部用户</button>
    <button class="btn btn-info" @click="fouruser">软件1704</button>
    <button class="btn btn-success" @click="fifuser">软件1705</button>
    <button class="btn btn-danger" @click="next">轮播</button>
  </div>
</template>
<script>
  import {mapState,mapActions,mapMutations} from "vuex"
export default {
  
  data() {
    return {
        userlist:[]
    };
  },
  methods:{
      alluser(){
          this.userlist = this.UserList;
           this.sotrs();
      },
      fouruser(){
          this.userlist = this.$store.getters.Four;
           this.sotrs();
      },
      fifuser(){
          this.userlist = this.$store.getters.Fif;
           this.sotrs();
      },
      sotrs(){
          this.userlist.sort((a,b)=>Number(a.age)-Number(b.age))
      },
      ...mapActions(['getuser']),
      next(){
          this.$router.push("/Swiper")
      },
      handle(){
        let scrollTop = document.documentElement.scrollTop;
        console.log(scrollTop);
      }
  },
  created(){
     this.getuser().then(()=>{
         this.userlist = this.UserList
     })
  },
  computed:{
      ...mapState(['UserList'])
  },
  mounted(){
    window.addEventListener("scroll",this.handle)
  },

};
</script>
<style scoped>
table {
  font-size: 14px;
}
</style>