<template>
  <div>
    <div id="app">
      <HeaderMain />
    </div>

    <transition name='fade'>
      <div class='gap'>
        <router-view></router-view>
      </div>
    </transition>
  </div>
</template>

<script>
import HeaderMain from './components/Header/HeaderMain';

export default {
  name: 'app',

  components: {
    HeaderMain
  },

  data() {
    return {
      session: this.$root.$data.session
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.fade-enter-active, .fade-leave-active {
      transition: opacity .5s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
