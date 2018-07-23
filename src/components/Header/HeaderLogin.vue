<template>
  <div class="loginButton" v-if="loggedIn">
    <img v-bind:src="avatar" v-if="!!avatar" />
    <div class="headerUserIcon" v-else>
      <i class="material-icons">person</i>
    </div>
    <b-button id="headerButton"  v-on:click='googleLogin'>Logout</b-button>
  </div>
  <div class="loginButton" v-else>
    <b-button id="headerButton"  v-on:click='googleLogin'>Login with Google</b-button>
  </div>
</template>

<script>
import bButton     from 'bootstrap-vue/es/components/button/button';
import googleOauth from '../../services/google/googleOauth';

export default {
  name: 'HeaderLogin',

  components: {
    bButton
  },

  computed: {
    loggedIn() {
      return this.$store.state.loggedIn;
    },

    avatar() {
      return this.$store.state.currentUser.image_url;
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

<style>
  #headerButton {
    background-color: rgba(0, 100, 0, 1);
    color: #E9FFE2;
    border: 1px solid #E9FFE2;
    border-radius: 4px;
    font-family: 'Abel', sans-serif;
  }

  #headerButton:hover {
    color: rgba(0, 100, 0, 1);
    background-color: #E9FFE2;
  }

  .loginButton img {
    margin-right: 15px;
    height: 50px;
    border-radius: 25px;
  }

  .headerUserIcon {
    background-color: #aaa;
    margin-right: 15px;
    width: 50px;
    height: 50px;
    border-radius: 25px;
    display: inline-block;
    vertical-align: middle;
  }

  .headerUserIcon i.material-icons {
    font-size: 50px;
    color: #fff;
  }
</style>
