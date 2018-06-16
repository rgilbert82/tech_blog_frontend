<template>
  <div>
    <h2>{{ post.title }}</h2>
    <h3>{{ post.description }}</h3>
    <div>
      <span>By <router-link :to="{ name: 'AuthorPage', params: { id: post.user_id }}">{{post.user_name}}</router-link></span>
    </div>
    <p>{{ post.body }}</p>
  </div>
</template>

<script>
  export default {
    name: 'PostMain',

    props: {
      post: Object
    }
  }
</script>
