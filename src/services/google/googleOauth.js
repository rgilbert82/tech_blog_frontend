export default class googleOauth {
  constructor(store) {
    this.store         = store;
    this.setup         = this.setup.bind(this);
    this.googleLogin   = this.googleLogin.bind(this);
    this.googleLogout  = this.googleLogout.bind(this);
    this.googleSession = this.googleSession.bind(this);
  }

  setup() {
    gapi.load('client:auth2', () => {
      gapi.client.init({
        clientId: process.env.VUE_APP_OAUTH_CLIENT_ID,
        scope: 'profile'
      }).then(() => {
        const GoogleAuth = gapi.auth2.getAuthInstance();
        const user       = GoogleAuth.currentUser.get().getBasicProfile();

        if (user) {
          this.store.dispatch('loginApp', { user: user });
        }
      });
    });
  }

  googleSession() {
    const GoogleAuth = gapi.auth2.getAuthInstance();

    if (GoogleAuth.isSignedIn.get()) {
      this.googleLogout();
    } else {
      this.googleLogin();
    }
  }

  googleLogin() {
    const GoogleAuth = gapi.auth2.getAuthInstance();

    GoogleAuth.signIn()
      .then((user) => {
        this.store.dispatch('loginApp', { user: user.getBasicProfile() });
      }).catch(() => {
        this.store.commit('setMessage', 'There was an error logging into Google.');
      });
  }

  googleLogout() {
    const GoogleAuth = gapi.auth2.getAuthInstance();

    GoogleAuth.signOut()
      .then(() => {
        this.store.commit('logout');
      });
  }
}
