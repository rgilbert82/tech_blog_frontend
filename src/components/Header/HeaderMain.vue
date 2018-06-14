<template>
  <div>
    <h1>Header</h1>
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
