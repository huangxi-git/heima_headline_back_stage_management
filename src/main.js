import Vue from 'vue'

// 引入 element 
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import App from './App.vue'

// 使用 -- 全局挂载
Vue.use(ElementUI)

// 全局样式
import '@/style/index.less'
// 引入路由
import router from './router/index'


Vue.config.productionTip = false

new Vue({
  // 注入
  router,

  render: h => h(App),
}).$mount('#app')
