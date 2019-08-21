<template>
    <div class="animate">
     <div class="demo">
     <button class="btn btn-warning" @click="isshow=!isshow">toggle</button>
     <button class="btn btn-primary" @click="isshow=!isshow">文字</button>
   <transition name="fade">
         <div class="wrap" v-show="isshow"></div> 
   </transition>
   <transition name="scale">
         <div class="text" v-show="isshow">撒旦撒旦倒萨倒萨打开电视卡了大家阿斯利康的的撒开了多久啦罗迪克撒赖打开的撒开绿灯</div>  
   </transition>
   <transition enter-active-class="animated bounce" leave-active-class="animated fadeOut">
       <button class="btn btn-primary" v-show="isshow">我是动画</button>
   </transition>
     </div>
     <button class="btn btn-primary" @click="add">新增</button>
     <table class="table table-bordered table-warning">
        <thead>
          <th>姓名</th>
          <th>性别</th>
          <th>年龄</th>
          <th>班级</th>
          <th>爱好</th>
          <th>操作</th>
        </thead>
        <tbody is="transition-group" name="slide">
          <tr v-for="(item,index) in UserList" :key="index">
            <td>{{item.username}}</td>
            <td>{{item.sex}}</td>
            <td>{{item.age}}</td>
            <td>{{item.class}}</td>
            <td>{{item.like}}</td>
            <td><button class="btn btn-danger btn-sm" @click="del(index)">删除</button></td>
          </tr>
          </transition>
        </tbody>
      </table>
        </div> 
</template>
<script>
import {mapState} from 'vuex'
export default {
    data(){
        return{
            isshow:true
        }
    },
    computed:{
    ...mapState({
        UserList:state=>state.UserList
    })
    },
    methods:{
        del(index){
            this.UserList.splice(index,1);
        },
    add(){
        this.UserList.push(this.UserList[~~(Math.random()*6)])
    }
    },
    


}
</script>
<style scoped>
.wrap{
    width: 50%;
    height: 100px;
    background-color: skyblue;
    margin: auto; 
}
.fade-enter,.fade-leave-to{
    transform: translate(100px,100px);
    opacity: 0;
}
.fade-enter-active{
    transition: all .5s;
}
.fade-leave-active{
    transition: all 1s;
}
.scale-enter-active{
    animation: counce .5s                                                                                                                                                                                                                                                                                                                                                                                            ;
}
.scale-leave-active{
    animation: counce .5s reverse;
}
@keyframes counce{
    0%{transform: scale(0)}
    50%{transform: scale(1.5)}
    100%{transform: scale(1)}
}
table{
    font-size: 10px;
}
.table th, .table td{
    vertical-align: middle;
}
.slide-enter,.slide-leave-to{
    opacity: 0;
    transform: translateY(50px);
}
.slide-enter-active,.slide-leave-active{
    transition: all .5s ease;
}
.slide-move{
    transition: all .5s ease;
}
.slide-leave-active{
	position: absolute;
    
			}
</style>