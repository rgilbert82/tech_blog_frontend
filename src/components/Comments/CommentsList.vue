<template>
  <ul>
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
