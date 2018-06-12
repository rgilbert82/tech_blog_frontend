export default {
  message: '',
  loggedIn: false,
  currentUser: {},

  setup() {
    gapi.load('client:auth2', () => {
      gapi.client.init({
        clientId: process.env.VUE_APP_OAUTH_CLIENT_ID,
        scope: 'profile'
      }).then(() => {
        const GoogleAuth = gapi.auth2.getAuthInstance();
        const user       = GoogleAuth.currentUser.get().getBasicProfile();

        if (user) {
          this.loginApp(user);
        }
      });
    });
  },

  createUserObject(user) {
    return {
      id:       user.Eea,
      name:     user.ig,
      email:    user.U3,
      imageUrl: user.Paa
    };
  },

  loginApp(user) {
    this.loggedIn    = true;
    this.currentUser = this.createUserObject(user);
    console.log(this.currentUser);
  },

  logoutApp() {
    this.loggedIn    = false;
    this.currentUser = {};
    console.log('LOGGED OUT');
  },

  googleSession() {
    const GoogleAuth = gapi.auth2.getAuthInstance();

    if (GoogleAuth.isSignedIn.get()) {
      this.googleLogout();
    } else {
      this.googleLogin();
    }
  },

  googleLogin() {
    const GoogleAuth = gapi.auth2.getAuthInstance();

    GoogleAuth.signIn()
      .then((user) => {
        this.loginApp(user.getBasicProfile());
      }).catch((err) => {
        console.log(err);
      });
  },

  googleLogout() {
    const GoogleAuth = gapi.auth2.getAuthInstance();

    GoogleAuth.signOut()
      .then(() => {
        this.logoutApp();
      });
  },

  init() {
    this.setup              = this.setup.bind(this);
    this.loginApp           = this.loginApp.bind(this);
    this.logoutApp          = this.logoutApp.bind(this);
    this.googleLogin        = this.googleLogin.bind(this);
    this.googleLogout       = this.googleLogout.bind(this);
    this.googleSession      = this.googleSession.bind(this);

    this.setup();

    return this;
  }
}
