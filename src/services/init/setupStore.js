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

      logout(state) {
        state.currentUser = {};
        state.loggedIn    = false;
      },

      login(state, user) {
        state.currentUser = user;
        state.loggedIn    = true;
      }
    },

    actions: {
      loginApp({ dispatch, commit }, user) {
        const userObj = {
          id:       user.user.Eea,
          name:     user.user.ig,
          email:    user.user.U3,
          imageUrl: user.user.Paa
        };

        commit('login', userObj);

        createUserAPI(userObj)
          .then((data) => {
            console.log(data);
          }).catch((err) => {
            console.log(err);
          });
      }
    }
  });
};
