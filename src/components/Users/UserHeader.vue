<template>
  <div>
    <img v-bind:src="user.image_url" />
    <h2>{{ user.name }}</h2>
    <aside>{{ user.email }}</aside>
  </div>
</template>

<script>
  export default {
    name: 'UserHeader',

    props: {
      user: Object
    }
  }
</script>
