import Vuex from 'vuex';
import createUserAPI from '../api/users/createUserAPI.js';

export default () => {
  return new Vuex.Store({
    state: {
      admin:       false,
      loggedIn:    false,
      currentUser: {},
      message:     ''
    },

    mutations: {
      setMessage (state, message) {
        state.message = message;
      },

      login(state, user) {
        state.currentUser = user;
        state.loggedIn    = true;
        state.admin       = !!user.admin;
      },

      logout(state) {
        state.currentUser = {};
        state.loggedIn    = false;
        state.admin       = false;
      }
    },

    actions: {
      loginApp({ commit }, user) {
        const userObj = {
          id:       user.user.Eea,
          name:     user.user.ig,
          email:    user.user.U3,
          image_url: user.user.Paa
        };

        createUserAPI(userObj)
          .then((data) => {
            commit('login', data);
            console.log(data);
          }).catch(() => {
            commit('login', userObj);
          });
      }
    }
  });
};
