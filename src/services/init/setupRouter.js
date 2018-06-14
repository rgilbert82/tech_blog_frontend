import VueRouter   from 'vue-router';

export default () => {
  const routes = [
    // {
    //   name: 'MainIndex',
    //   path: '/',
    //   component: MainIndex
    // }
  ];

  return new VueRouter({ mode: 'history', routes: routes });
};
