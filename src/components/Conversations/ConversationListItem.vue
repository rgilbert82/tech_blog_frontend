<template>
  <div class="convListItem" v-if="validConversation">
    <router-link class="convListItemLink" :to="{ name: 'ConversationPage', params: { slug: post.slug, id: conversation.id } }">
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

    computed: {
      validConversation() {
        return !!this.dataLoaded && !!this.comments.length;
      }
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

<style>
  .convListItem {
    box-sizing: border-box;
    background-color: #fff;
    border: 1px solid #bbb;
    border-radius: 4px;
    margin: 0 0 20px 0;
    box-shadow: 0 1px 1px #ccc;
  }

  .convListItem .convListItemLink:hover {
    text-decoration: none;
  }
</style>
