import Vue from  'vue'
import resource from 'vue-resource'
import echarts from 'echarts'
import store from './store/index'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router/router'
import App from './App.vue'

Vue.prototype.$echarts=echarts
Vue.use(ElementUI);
Vue.use(resource)



//判断有没有登录
if(localStorage.token){
  //登录成功  设置token请求头
  Vue.http.headers.common['Authorization']=localStorage.token
}else{
  location.href='./login.html'
}

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
