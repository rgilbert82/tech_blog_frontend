import "babel-polyfill";
import Vue         from 'vue';
import Vuex        from 'vuex';
import VueRouter   from 'vue-router';
import App         from './App.vue'
import dotenv      from 'dotenv';
import setupStore  from './services/init/setupStore';
import setupRouter from './services/init/setupRouter';

dotenv.config();

Vue.use(Vuex);
Vue.use(VueRouter);
Vue.config.productionTip = false

const store  = setupStore();
const router = setupRouter();

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
