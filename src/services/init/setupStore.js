import Vuex from 'vuex';

export default () => {
  const store = new Vuex.Store({
    state: {
      message: 'hello',
      loggedIn: false,
      currentUser: {}
    },

    mutations: {
      setMessage (state, message) {
        state.message = message;
      },

      logout(state) {
        state.currentUser = {};
        state.loggedIn    = false;
      },

      setCurrentUser(state, user) {
        const userObj = {
          id:       user.user.Eea,
          name:     user.user.ig,
          email:    user.user.U3,
          imageUrl: user.user.Paa
        };

        state.currentUser = userObj;
        state.loggedIn    = true;
        console.log(state.currentUser);
      }
    },

    actions: {
      loginApp({ commit }, user) {
        commit('setCurrentUser', user);
      },

      googleSession({ dispatch, commit }) {
        const GoogleAuth = gapi.auth2.getAuthInstance();

        if (GoogleAuth.isSignedIn.get()) {
          dispatch('googleLogout');
        } else {
          dispatch('googleLogin');
        }
      },

      googleLogin({ dispatch, commit }) {
        const GoogleAuth = gapi.auth2.getAuthInstance();

        GoogleAuth.signIn()
          .then((user) => {
            dispatch('loginApp', { user: user.getBasicProfile() });
          }).catch((err) => {
            commit('setMessage', 'There was an error logging into Google.');
          });
      },

      googleLogout({ commit }) {
        const GoogleAuth = gapi.auth2.getAuthInstance();

        GoogleAuth.signOut()
          .then(() => {
            commit('logout');
          });
      }
    }
  });

  gapi.load('client:auth2', () => {
    gapi.client.init({
      clientId: process.env.VUE_APP_OAUTH_CLIENT_ID,
      scope: 'profile'
    }).then(() => {
      const GoogleAuth = gapi.auth2.getAuthInstance();
      const user       = GoogleAuth.currentUser.get().getBasicProfile();

      if (user) {
        store.dispatch('loginApp', { user: user });
      }
    });
  });

  return store;
};
