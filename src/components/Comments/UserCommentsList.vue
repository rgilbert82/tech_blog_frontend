<template>
  <ul>
    <li v-for="comment in comments" :key="comment.id">
      <UserCommentListItem v-bind:comment="comment" />
    </li>
  </ul>
</template>

<script>
  import UserCommentListItem from './UserCommentListItem.vue';

  export default {
    name: 'UserCommentsList',

    components: {
      UserCommentListItem
    },

    props: {
      comments: Array
    }
  }
</script>
