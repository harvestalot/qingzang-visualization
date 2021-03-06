import Vue from 'vue';
import AMapLoader from '@amap/amap-jsapi-loader';
import store from './store';
import router from './router';
import App from './App.vue';

Vue.prototype.$AMapLoader = AMapLoader;

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount('#app');
