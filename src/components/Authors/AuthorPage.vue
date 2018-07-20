<template>
  <div>
    <template v-if="!pageLoaded">
      <PageLoading />
    </template>
    <template v-else-if="badRoute">
      <NothingHere />
    </template>
    <template v-else>
      <div>
        <AuthorHeader v-bind:author="author" />
        <AuthorPosts  v-bind:author="author" />
      </div>
    </template>
  </div>
</template>

<script>
  import AuthorHeader from './AuthorHeader.vue';
  import AuthorPosts  from './AuthorPosts.vue';
  import PageLoading  from '../Misc/PageLoading.vue';
  import NothingHere  from '../Misc/NothingHere.vue';
  import getUserAPI   from '../../services/api/users/getUserAPI.js'

  export default {
    name: 'AuthorPage',

    components: {
      AuthorHeader,
      AuthorPosts,
      PageLoading,
      NothingHere
    },

    data() {
      return {
        pageLoaded: false,
        badRoute:   false,
        author:       {}
      }
    },

    created: function() {
      this.fetchAuthor();
    },

    methods: {
      fetchAuthor() {
        const id = this.$route.params.id;

        return getUserAPI(id)
          .then((data) => {
            this.author = data;
            this.pageLoaded = true;
          }).catch(() => {
            this.badRoute   = true;
            this.pageLoaded = true;
            this.$store.commit('setMessage', 'There was an error loading this page.');
          });
      }
    }
  }
</script>
