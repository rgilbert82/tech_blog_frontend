<template>
  <div>
    <router-link :to="{ name: 'UserPage', params: { id: comment.user_id }}">
      <h3>{{comment.username}}</h3>
    </router-link>
    <p>{{comment.body}}</p>
    <small>{{comment.created_at}}</small>
  </div>
</template>

<script>
  export default {
    name: 'CommentListItem',

    props: {
      comment: Object
    }
  }
</script>
