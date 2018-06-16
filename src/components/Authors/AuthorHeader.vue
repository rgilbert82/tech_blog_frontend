<template>
  <div>
    <img v-bind:src="author.image_url" />
    <h2>{{ author.name }}</h2>
    <aside>{{ author.email }}</aside>
    <p>{{ author.author_description }}</p>
  </div>
</template>

<script>
  export default {
    name: 'AuthorHeader',

    props: {
      author: Object
    }
  }
</script>
