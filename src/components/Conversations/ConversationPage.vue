<template>
  <div>
    <template v-if="!pageLoaded">
      <PageLoading />
    </template>
    <template v-else-if="badRoute">
      <NothingHere />
    </template>
    <template v-else>
      <ConversationMain v-bind:post="post" v-bind:conversation="conversation" v-bind:comments="comments" />
    </template>
  </div>
</template>

<script>
  import PageLoading from '../Misc/PageLoading.vue';
  import NothingHere from '../Misc/NothingHere.vue';
  import ConversationMain from './ConversationMain.vue';
  import getPostConversationAPI from '../../services/api/conversations/getPostConversationAPI.js';

  export default {
    name: 'ConversationPage',

    components: {
      PageLoading,
      NothingHere,
      ConversationMain
    },

    data() {
      return {
        pageLoaded: false,
        badRoute:   false,
        conversation: {},
        comments:   [],
        post:       {}
      }
    },

    created: function() {
      this.fetchComments();
    },

    methods: {
      fetchComments() {
        const postSlug = this.$route.params.slug;
        const convId   = this.$route.params.id;
        const convObj  = { postSlug: postSlug, convId: convId };

        return getPostConversationAPI(convObj)
          .then((data) => {
            this.post         = data.post;
            this.comments     = data.comments;
            this.conversation = data.conversation;
            this.pageLoaded   = true;
          }).catch(() => {
            this.pageLoaded = true;
            this.badRoute   = true;
            this.$store.commit('setMessage', 'There was an error loading this page.');
          });
      }
    }
  }
</script>
