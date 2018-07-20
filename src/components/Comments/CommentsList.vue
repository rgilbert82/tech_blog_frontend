<template>
  <ul class="commentsList">
    <li v-for="comment in comments" :key="comment.id">
      <CommentListItem v-bind:comment="comment" />
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
      comments: Array
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
