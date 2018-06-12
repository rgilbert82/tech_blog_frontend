<template>
  <div v-if="session.loggedIn">
    <button v-on:click='googleLogin'>Logout</button>
  </div>
  <div v-else>
    <button v-on:click='googleLogin'>Login</button>
  </div>
</template>

<script>
export default {
  name: 'HeaderLogin',

  data() {
    return {
      session: this.$root.$data.session
    }
  },

  methods: {
    googleLogin() {
      this.session.googleSession();
    }
  }
}
</script>
