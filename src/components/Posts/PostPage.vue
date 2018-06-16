<template>
  <div>
    <template v-if="!pageLoaded">
      <PageLoading />
    </template>
    <template v-else-if="badRoute">
      <NothingHere />
    </template>
    <template v-else>
      <PostMain v-bind:post="post" />
    </template>
  </div>
</template>

<script>
  import PostMain    from './PostMain.vue';
  import PageLoading from '../Misc/PageLoading.vue';
  import NothingHere from '../Misc/NothingHere.vue';
  import getPostAPI  from '../../services/api/posts/getPostAPI.js';

  export default {
    name: 'PostPage',

    components: {
      PageLoading,
      NothingHere,
      PostMain
    },

    data() {
      return {
        pageLoaded: false,
        badRoute: false,
        post: {}
      }
    },

    created: function() {
      const slug = this.$route.params.slug;

      return getPostAPI(slug)
        .then((data) => {
          this.post = data;
          this.pageLoaded = true;
        }).catch(() => {
          this.badRoute   = true;
          this.pageLoaded = true;
          this.$store.commit('setMessage', 'There was an error loading this page.');
        });
    }
  }
</script>
