import axios from 'axios'
axios.interceptors.response.use(result => result.data);
export let getDate=()=>{
    return axios.get('/static/mock/index.json')
}