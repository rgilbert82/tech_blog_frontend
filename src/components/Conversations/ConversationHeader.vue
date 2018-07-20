<template>
  <div>
    <router-link :to="{ name: 'PostPage', params: { slug: post.slug } }"><h2>{{ post.description }}</h2></router-link>
    <h4>By <router-link :to="{ name: 'AuthorPage', params: { id: post.user_id } }">{{ post.username }}</router-link></h4>
    <small>{{ post.created_at }}</small>
  </div>
</template>

<script>
  export default {
    name: 'ConversationHeader',

    props: {
      post: Object
    }
  }
</script>
