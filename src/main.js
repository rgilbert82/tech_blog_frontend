import Vue          from 'vue';
import Vuex         from 'vuex';
import VueRouter    from 'vue-router';
import dotenv       from 'dotenv';
import App          from './components/App/App.vue'
import setupStore   from './services/init/setupStore';
import setupRouter  from './services/init/setupRouter';
import googleOauth  from './services/google/googleOauth';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

dotenv.config();

Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.config.productionTip = false

const store  = setupStore();
const router = setupRouter();
const oauth  = new googleOauth(store);

oauth.setup();

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
