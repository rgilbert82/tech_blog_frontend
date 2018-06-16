<template>
  <div>
    <template v-if="!pageLoaded">
      <PageLoading />
    </template>
    <template v-else-if="posts.length === 0">
      <div>
        <p>{{ author.name }} hasn't written any posts yet.</p>
      </div>
    </template>
    <template v-else>
      <PostsList v-bind:posts="posts" listClass="postsList postsListAuthor" />
    </template>
  </div>
</template>

<script>
  import PostsList         from '../Posts/PostsList.vue';
  import PageLoading       from '../Misc/PageLoading.vue';
  import getAuthorPostsAPI from '../../services/api/posts/getAuthorPostsAPI.js';

  export default {
    name: 'AuthorPosts',

    props: {
      author: Object
    },

    components: {
      PostsList,
      PageLoading
    },

    data() {
      return {
        posts: [],
        pageLoaded: false
      }
    },

    created: function() {
      this.fetchAuthorPosts();
    },

    methods: {
      fetchAuthorPosts() {
        const id = this.author.id;

        return getAuthorPostsAPI(id)
          .then((data) => {
            this.posts = data;
            this.pageLoaded = true;
          }).catch(() => {
            this.pageLoaded = true;
            this.$store.commit('setMessage', 'There was an error loading the posts.');
          });
      }
    }
  }
</script>
