import VueRouter   from 'vue-router';
import MainPage    from '../../components/Main/MainPage.vue';
import PostPage    from '../../components/Posts/PostPage.vue';
import UserPage    from '../../components/Users/UserPage.vue';
import AdminNew    from '../../components/Admins/AdminNew.vue';
import AdminPage   from '../../components/Admins/AdminPage.vue';
import AuthorPage  from '../../components/Authors/AuthorPage.vue';
import NothingHere from '../../components/Misc/NothingHere.vue';
import ConversationPage from '../../components/Conversations/ConversationPage.vue';

export default () => {
  const routes = [
    {
      name: 'MainPage',
      path: '/',
      component: MainPage
    },
    {
      name: 'PostPage',
      path: '/posts/:slug',
      component: PostPage
    },
    {
      name: 'ConversationPage',
      path: '/posts/:slug/conversation/:id',
      component: ConversationPage
    },
    {
      name: 'AuthorPage',
      path: '/contributors/:id',
      component: AuthorPage
    },
    {
      name: 'UserPage',
      path: '/users/:id',
      component: UserPage
    },
    {
      name: 'AdminPage',
      path: '/admin',
      component: AdminPage
    },
    {
      name: 'AdminNew',
      path: '/admin/newpost',
      component: AdminNew
    },
    {
      name: 'NothingHere',
      path: '/*',
      component: NothingHere
    }
  ];

  return new VueRouter({ mode: 'history', routes: routes });
};
