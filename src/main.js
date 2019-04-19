// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '../node_modules/_bootstrap@4.3.1@bootstrap/dist/js/bootstrap';
import '../node_modules/_bootstrap@4.3.1@bootstrap/dist/css/bootstrap.css';

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },//注册组件之后就可以直接标签化使用了。
  template: '<App/>'
})