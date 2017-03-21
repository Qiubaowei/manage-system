// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';    // 默认主题
// import Va from './lib/va'
// import Validate from './lib/validate'
//
// Vue.use(Validate)
// Vue.use(Va)
Vue.use(ElementUI)

// Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  //el: '#app',
  router,
  // template: '<App/>',
  render: h => h(App)
  // components: { App }
}).$mount('#app')
