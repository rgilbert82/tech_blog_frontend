<template>
  <div id="conversationMain">
    <ConversationHeader v-bind:post="post" />
    <div>
      <NewCommentForm v-bind:conversation="conversation" />
      <div id="conversationComments">
        <CommentsList v-bind:comments="commentsList" v-bind:editable="true" />
      </div>
    </div>
  </div>
</template>

<script>
  import CommentsList       from '../Comments/CommentsList.vue';
  import NewCommentForm     from '../Comments/NewCommentForm.vue';
  import ConversationHeader from './ConversationHeader.vue';
  import createCommentAPI   from '../../services/api/comments/createCommentAPI.js';

  export default {
    name: 'ConversationMain',

    components: {
      CommentsList,
      NewCommentForm,
      ConversationHeader
    },

    props: {
      post: Object,
      conversation: Object,
      comments: Array
    },

    data() {
      return {
        commentsList: [...this.comments]
      }
    },

    methods: {
      createComment(commentObj) {
        return createCommentAPI(commentObj)
          .then((data) => {
            this.commentsList = [...this.commentsList, data];
          }).catch(() => {
            this.$store.commit('setMessage', 'There was an error creating the comment.');
          });
      },

      deleteComment(commentId) {
        this.commentsList = this.commentsList.filter((comment) => {
          return comment.id !== commentId;
        });
      }
    }
  }
</script>

<style>
  #conversationMain {
    box-sizing: border-box;
    max-width: 800px;
    margin: 0 auto 40px auto;
  }

  #conversationComments {
    box-sizing: border-box;
    background-color: #fff;
    border: 1px solid #bbb;
    border-radius: 4px;
    margin: 0;
    box-shadow: 0 1px 1px #ccc;
  }
</style>
