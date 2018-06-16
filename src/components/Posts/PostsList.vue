<template>
  <div>
    <ul :class="listClass">
      <li v-for="post in posts" :key="post.id">
        <PostListItem v-bind:post="post"/>
      </li>
    </ul>
  </div>
</template>

<script>
  import PostListItem   from '../Posts/PostListItem.vue';

  export default {
    name: 'PostsList',

    components: {
      PostListItem
    },

    props: {
      posts: Array,
      listClass: String
    }
  }
</script>
