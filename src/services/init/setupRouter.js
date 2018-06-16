import VueRouter   from 'vue-router';
import PostPage    from '../../components/Posts/PostPage.vue';
import MainIndex   from '../../components/Main/MainIndex.vue';
import AuthorPage  from '../../components/Authors/AuthorPage.vue';

export default () => {
  const routes = [
    {
      name: 'MainIndex',
      path: '/',
      component: MainIndex
    },
    {
      name: 'PostPage',
      path: '/posts/:slug',
      component: PostPage
    },
    {
      name: 'AuthorPage',
      path: '/contributors/:id',
      component: AuthorPage
    }
  ];

  return new VueRouter({ mode: 'history', routes: routes });
};
