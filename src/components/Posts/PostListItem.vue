<template>
  <div>
    <router-link :to="{ name: 'PostPage', params: { slug: post.slug } }">
      <h2>{{ post.title }}</h2>
    </router-link>
    <div v-if="post.user_name">
      <span>By <router-link :to="{ name: 'AuthorPage', params: { id: post.user_id }}">{{post.user_name}}</router-link></span>
    </div>
    <p>{{ post.description }}</p>
  </div>
</template>

<script>
  export default {
    name: 'PostListItem',
    props: {
      post: Object
    }
  }
</script>
