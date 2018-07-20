<template>
  <b-alert class="messageBox" show variant="danger">
    <p>DANGER</p>
    <a class="closeWindowButton" v-on:click.prevent="closeWindow">&#xd7;</a>
  </b-alert>
</template>

<script>
  import bAlert from 'bootstrap-vue/es/components/alert/alert';

  export default {
    name: 'MessageBox',

    components: {
      bAlert
    },

    methods: {
      closeWindow() {
        this.$store.commit('setMessage', '');
      }
    }
  }
</script>

<style>
  .messageBox {
    position: relative;
  }

  .messageBox p {
    text-align: center;
    margin: 0;
    padding: 10px;
  }

  .closeWindowButton {
    position: absolute;
    top: 0;
    right: 5px;
  }

  .closeWindowButton:hover {
    cursor: pointer;
  }
</style>
