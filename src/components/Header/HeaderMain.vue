<template>
  <div>
    <router-link :to="{ name: 'MainIndex' }"><h1>Tech Blog</h1></router-link>
    <HeaderLogin />
  </div>
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
