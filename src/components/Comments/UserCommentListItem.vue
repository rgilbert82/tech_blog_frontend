<template>
  <div>
    <h4>
      From:
      <router-link :to="{ name: 'ConversationPage', params: { slug: comment.post_slug, id: comment.conversation_id } }">
        {{ comment.description }}
      </router-link>
    </h4>
    <p>{{comment.body}}</p>
    <small>{{comment.created_at}}</small>
  </div>
</template>

<script>
  export default {
    name: 'UserCommentListItem',

    props: {
      comment: Object
    }
  }
</script>
