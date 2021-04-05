import Vue from 'vue'
import router from '../router'
import axios from 'axios'
import VueAxios from 'vue-axios'

//axios拦截器
//拦截ajax请求并配置token头
axios.interceptors.request.use(config => {
    let token = localStorage.getItem('token')
    if (token) {
        config.headers.authorization = token
    }
    return config
}, err => Promise.reject(err))

//拦截ajax回应
//如果token失效（后端返回401），跳到登录页面
axios.interceptors.response.use(
    response => response,
    err => {
        if(err.response) {
            if(err.response.status === 401) {
                localStorage.clear()
                router.replace({
                    path: 'login'
                })
            }
        }

        return Promise.reject(err.response.data)
    }
)

Vue.use(VueAxios, axios)