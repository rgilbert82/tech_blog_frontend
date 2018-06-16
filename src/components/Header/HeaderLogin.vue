<template>
  <div v-if="loggedIn">
    <button v-on:click='googleLogin'>Logout</button>
  </div>
  <div v-else>
    <button v-on:click='googleLogin'>Login</button>
  </div>
</template>

<script>
import googleOauth from '../../services/google/googleOauth';

export default {
  name: 'HeaderLogin',

  computed: {
    loggedIn() {
      return this.$store.state.loggedIn;
    }
  },

  methods: {
    googleLogin() {
      const oauth = new googleOauth(this.$store);
      oauth.googleSession();
    }
  }
}
</script>
