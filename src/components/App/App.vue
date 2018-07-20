<template>
  <div>
    <div id="header">
      <HeaderMain />
    </div>

    <div id="main">
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

export default {
  name: 'app',

  components: {
    HeaderMain
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
}

#main {
  background-color: #FAFAFA;
  padding: 30px 100px;
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
}
</style>
