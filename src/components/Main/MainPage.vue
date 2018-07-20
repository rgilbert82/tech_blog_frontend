<template>
  <div id="mainPage">
    <h2 id="mainPageHeader">Recent Posts</h2>

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
    name: 'MainPage',

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

<style>
  #mainPage {
    box-sizing: border-box;
    margin: 0 auto;
  }

  #mainPage h2#mainPageHeader {
    color: #444;
    font-size: 22px;
    margin: 0 0 30px 0;
  }
</style>
