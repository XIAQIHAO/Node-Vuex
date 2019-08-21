<template>
  <div class="swiper">
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide v-for="(imgUrl,index) in imgList" :key="index">
        <img :src="imgUrl" alt />
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <button class="btn btn-primary" @click="next">动画</button>

  </div>
</template>
<script>
export default {
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          clickable:true
        },
        autoplay:{
            delay:2000 
        },
        speed: 1000,
        loop: true
      },
      imgList: [
        "https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20197/b72df47942fb28fcd7bf481f01e785f5.jpg",
        "https://h-des-activity-fecp.qunarzz.com/h_des_activity_fe_h_des_activity_fe/973dc1ae0da73a58410186df08ff25cb.jpg",
        "https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20197/a685001bbf5e77a203ff8815e953efbe.jpg_945x288_52b6ec01.jpg",
        "https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20198/70dfd4182c41d40007f0730a8f977078.jpg",
        "https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20197/3f5ff03fa0c024b930f515e63ae2c702.jpg_945x288_7dff4510.jpg"
      ]
    };
  },
  methods: {
    next(){
     this.$router.push("/animate")

    }
  }
};
</script>
<style scoped>
.swiper img {
  width: 100%;
  height: 200px;
}
.swiper-pagination-bullet-active{
    background-color: orange !important;
}
</style>