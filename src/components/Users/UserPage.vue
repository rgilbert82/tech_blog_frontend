<template>
  <div>
    <template v-if="!pageLoaded">
      <PageLoading />
    </template>
    <template v-else-if="badRoute">
      <NothingHere />
    </template>
    <template v-else>
      <UserHeader v-bind:user="user" />
      <UserComments v-bind:user="user"/>
    </template>
  </div>
</template>

<script>
  import PageLoading  from '../Misc/PageLoading.vue';
  import NothingHere  from '../Misc/NothingHere.vue';
  import UserComments from './UserComments.vue';
  import UserHeader   from './UserHeader.vue';
  import getUserAPI   from '../../services/api/users/getUserAPI.js';

  export default {
    name: 'UserPage',

    components: {
      PageLoading,
      NothingHere,
      UserComments,
      UserHeader
    },

    data() {
      return {
        pageLoaded: false,
        badRoute: false,
        user: {}
      }
    },

    created: function() {
      this.fetchUser();
    },

    methods: {
      fetchUser() {
        const userId = this.$route.params.id;

        return getUserAPI(userId)
          .then((data) => {
            this.pageLoaded = true;
            this.user = data;
          }).catch(() => {
            this.badRoute   = true;
            this.pageLoaded = true;
            this.$store.commit('setMessage', 'There was an error loading this page.');
          });
      }
    }
  }
</script>
