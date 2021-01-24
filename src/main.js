import Vue from 'vue';
import AMapLoader from '@amap/amap-jsapi-loader';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from './store';
import router from './router';
import App from './App.vue';

Vue.use(ElementUI);
Vue.prototype.$AMapLoader = AMapLoader;

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount('#app');
