<template>
  <div v-if="!!dataLoaded">
    <router-link :to="{ name: 'ConversationPage', params: { slug: post.slug, id: conversation.id } }">
      <CommentsList v-bind:comments="comments" />
    </router-link>
  </div>
</template>

<script>
  import CommentsList               from '../Comments/CommentsList.vue';
  import getConversationCommentsAPI from '../../services/api/conversations/getConversationCommentsAPI.js';

  export default {
    name: 'ConversationListItem',

    components: {
      CommentsList
    },

    props: {
      conversation: Object,
      post: Object
    },

    data() {
      return {
        dataLoaded: false,
        comments: []
      }
    },

    created: function() {
      this.fetchComments();
    },

    methods: {
      fetchComments() {
        return getConversationCommentsAPI(this.conversation.id)
          .then((data) => {
            this.comments   = data;
            this.dataLoaded = true;
          }).catch(() => {
            console.log('Error');
          });
      }
    }
  }
</script>
