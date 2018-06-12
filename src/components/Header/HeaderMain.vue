<template>
  <div>
    <h1>Header</h1>
    <HeaderLogin />
  </div>
</template>

<script>
import HeaderLogin from './HeaderLogin';

export default {
  name: 'HeaderMain',

  components: {
    HeaderLogin
  }
}
</script>
