<template>
  <div id="appWrapper">
    <div id="header">
      <HeaderMain />
    </div>

    <div id="main">
      <div id="warningBox" v-if="hasMessage">
        <MessageBox />
      </div>

      <transition name='fade'>
        <div class='gap'>
          <router-view></router-view>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import HeaderMain from '@/components/Header/HeaderMain';
import MessageBox from '@/components/Misc/MessageBox.vue';

export default {
  name: 'app',

  components: {
    HeaderMain,
    MessageBox
  },

  computed: {
    hasMessage() {
      return !!this.$store.state.message;
    }
  }
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}

#header, #main {
  width: 100%;
}

#header {
  background-color: rgba(0, 100, 0, 1);
  padding: 20px 100px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
}

#main {
  min-height: 100%;
  background-color: #F2F2F2;
  padding: 130px 100px 30px 100px;
}

@media(max-width: 1000px) {
  #header, #main {
    padding-left: 50px;
    padding-right: 50px;
  }
}

@media(max-width: 480px) {
  #header, #main {
    padding-left: 20px;
    padding-right: 20px;
  }

  #main {
    padding-top: 200px;
  }
}
</style>
