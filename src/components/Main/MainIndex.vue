<template>
  <div>
    <h2>All Posts</h2>

    <template v-if="noPosts">
      <PageLoading />
    </template>
    <template v-else>
      <PostsList v-bind:posts="posts" listClass="postsList postsListMain" />
    </template>
  </div>
</template>

<script>
  import PostsList      from '../Posts/PostsList.vue';
  import PageLoading    from '../Misc/PageLoading.vue';
  import getAllPostsAPI from '../../services/api/posts/getAllPostsAPI.js';

  export default {
    name: 'MainIndex',

    components: {
      PageLoading,
      PostsList
    },

    data() {
      return {
        posts: []
      }
    },

    created: function() {
      this.fetchPosts();
    },

    computed: {
      noPosts() {
        return this.posts.length === 0;
      }
    },

    methods: {
      fetchPosts() {
        return getAllPostsAPI()
          .then((data) => {
            this.posts = data;
          }).catch(() => {
            this.$store.commit('setMessage', 'There was an error loading this page.');
          });
      }
    }
  }
</script>
