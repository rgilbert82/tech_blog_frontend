<template>
  <header>
    <div class="navLeft">
      <router-link id="headerLinkMain" :to="{ name: 'MainPage' }">
        <h1><span class="logoBox">T</span><span class="divider">|</span>Tech Blog</h1>
      </router-link>
    </div>
    <div class="navRight">
      <HeaderLogin />
    </div>
  </header>
</template>

<script>
import HeaderLogin from '@/components/Header/HeaderLogin';

export default {
  name: 'HeaderMain',

  components: {
    HeaderLogin
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}

header {
  color: #E9FFE2;
  overflow: hidden;
}

a#headerLinkMain {
  color: inherit;
  font-size: 22px;
  font-family: 'Abel', sans-serif;
}

a#headerLinkMain:hover {
  color: #fff;
  text-decoration: none;
}

h1 {
  margin: 0;
}

span.logoBox {
  background-color: #E9FFE2;
  color: rgba(0, 100, 0, 1);
  padding-left: 15px;
  padding-right: 15px;
  font-weight: bold;
  border-radius: 2px;
  display: inline-block;
}

a#headerLinkMain:hover span.logoBox {
  background-color: #fff;
}

span.divider {
  margin: 0 10px;
  display: inline-block;
}

.navLeft {
  float: left;
}

.navRight {
  float: right;
}


@media(max-width: 480px) {
  .navLeft {
    float: none;
  }

  .navRight {
    float: none;
    margin-top: 20px;
  }
}
</style>
