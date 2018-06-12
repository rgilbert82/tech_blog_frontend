import Vue         from 'vue';
import VueRouter   from 'vue-router';
import App         from './App.vue'
import dotenv      from 'dotenv';
import { session } from './services/misc';


dotenv.config();

Vue.use(VueRouter);
Vue.config.productionTip = false

const routes = [
  // {
  //   name: 'MainIndex',
  //   path: '/',
  //   component: MainIndex
  // }
];

const router = new VueRouter({ mode: 'history', routes: routes });

new Vue({
  render: h => h(App),
  router,
  data() {
    return {
      session: session.init()
    }
  }
}).$mount('#app')
