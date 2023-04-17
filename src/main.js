import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);


Vue.config.productionTip = false

//设置超时时间
axios.defaults.timeout = 5000
//设置api地址
//全局定义axios
axios.defaults.baseURL = 'https://luo.com/api'
//
// axios.interceptors.response.use(
//     response => response,
//     error => {
//       console.log('Unexpected')
//       return Promise.reject(error);
//     }
// );

Vue.prototype.$axios = axios
//
// // 图片服务器地址
Vue.prototype.$imgserver = 'https://luo.com'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
