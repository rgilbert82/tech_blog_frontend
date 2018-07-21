<template>
  <ul class="commentsList">
    <li v-for="comment in comments" :key="comment.id">
      <CommentListItem v-bind:comment="comment" v-bind:editable="editable"/>
    </li>
  </ul>
</template>

<script>
  import CommentListItem from './CommentListItem.vue';

  export default {
    name: 'CommentsList',

    components: {
      CommentListItem
    },

    props: {
      comments: Array,
      editable: Boolean
    },

    data() {
      return {
        commentsData: this.comments
      }
    },

    methods: {
      deleteComment(commentId) {
        this.$parent.deleteComment(commentId);
      }
    }
  }
</script>

<style>
  .commentsList {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  .commentsList li {
    list-style: none;
  }
</style>
