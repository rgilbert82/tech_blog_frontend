<template>
  <div>
    <ConversationHeader v-bind:post="post" />
    <div>
      <NewCommentForm v-bind:conversation="conversation" />
      <CommentsList v-bind:comments="commentsList" />
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
            this.commentsList = [...this.comments, data];
          }).catch(() => {
            this.$store.commit('setMessage', 'There was an error creating the comment.');
          });
      }
    }
  }
</script>
