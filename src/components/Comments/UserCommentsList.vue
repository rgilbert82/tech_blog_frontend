<template>
  <div id="userCommentListWrapper">
    <h2>Comments</h2>
    <ul class="userCommentList">
      <li v-for="comment in comments" :key="comment.id">
        <UserCommentListItem v-bind:comment="comment" />
      </li>
    </ul>
  </div>
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

<style>
#userCommentListWrapper {
  box-sizing: border-box;
}

#userCommentListWrapper h2 {
  color: #444;
  font-size: 16px;
  margin: 0 0 20px 0;
}

.userCommentList {
  padding: 0;
}

.userCommentList li {
  list-style: none;
}

</style>
