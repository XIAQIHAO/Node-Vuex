import Vue from 'vue'
import vuex from 'vuex'
import axios from 'axios'
Vue.use(vuex)

export default new vuex.Store({
    state:{
       List:localStorage.getItem("Listion"),
       Lists:[],
       UserList:JSON.parse(localStorage.getItem("userlist"))
    },
    mutations:{
        getmes(state,value){
            state.List = value;
        },
        gettwo(state,value){
            state.Lists = value
            
        },
        getusers(state,value){
            state.UserList = value;
            localStorage.setItem("userlist",JSON.stringify(value))
        }
    },
    actions:{
            getone(context,mes){
                    context.commit("gettwo",mes);
                    localStorage.setItem("Listion",mes)
            },
          getuser(context){
              return new Promise((resolve,res)=>{
                  axios.get("/static/mock/userlist.json").then(mes=>{
                    context.commit("getusers",mes.data.UserList);
                    resolve();
                  });
                 
              })
          }
    },
    getters:{
        Four:state=>state.UserList.filter(item=>item.class.includes("04")),
        Fif:state=>state.UserList.filter(item=>item.class.includes("05"))
    }

})