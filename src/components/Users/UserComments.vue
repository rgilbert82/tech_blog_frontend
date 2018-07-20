<template>
  <div>
    <template v-if="!pageLoaded">
      <PageLoading />
    </template>
    <template v-else-if="comments.length === 0">
      <div>
        <p>{{ author.name }} hasn't written any comments yet.</p>
      </div>
    </template>
    <template v-else>
      <UserCommentsList v-bind:comments="comments" />
    </template>
  </div>
</template>

<script>
  import PageLoading        from '../Misc/PageLoading.vue';
  import UserCommentsList   from '../Comments/UserCommentsList.vue';
  import getUserCommentsAPI from '../../services/api/users/getUserCommentsAPI.js'

  export default {
    name: 'UserComments',

    components: {
      PageLoading,
      UserCommentsList
    },

    props: {
      user: Object
    },

    data() {
      return {
        pageLoaded: false,
        comments: []
      }
    },

    created: function() {
      this.fetchComments();
    },

    methods: {
      fetchComments() {
        const userId = this.user.id;

        return getUserCommentsAPI(userId)
          .then((data) => {
            this.comments = data;
            this.pageLoaded = true;
          }).catch(() => {
            this.$store.commit('setMessage', 'There was an error loading the comments.');
          });
      }
    }
  }
</script>
