<template>
  <div class="userCommentListItem">
    <div class="userCommentDetails">
      <h4>
        <span>from:</span>
        <router-link class="userCommentLink" :to="{ name: 'ConversationPage', params: { slug: comment.post_slug, id: comment.conversation_id } }">
          {{ comment.description }}
        </router-link>
      </h4>
      <small>{{dateString}}</small>
    </div>

    <div class="userCommentBody">
      <p>{{comment.body}}</p>
    </div>
  </div>
</template>

<script>
  import formatDate from '../../services/misc/formatDate.js';

  export default {
    name: 'UserCommentListItem',

    props: {
      comment: Object
    },

    computed: {
      dateString() {
        return formatDate(this.comment.created_at);
      }
    }
  }
</script>

<style>
.userCommentListItem {
  box-sizing: border-box;
  padding: 15px;
  border: 1px solid #bbb;
  border-radius: 4px;
  box-shadow: 0 1px 1px #ccc;
  color: #444;
  font-family: 'Lato', sans-serif;
  background-color: #fff;
  margin: 0 0 20px 0;
}

.userCommentDetails {
  margin-bottom: 20px;
}

.userCommentDetails h4 {
  font-size: 18px;
  margin: 0;
  color: rgba(0, 100, 0, 1);
}

.userCommentDetails h4 .userCommentLink {
  color: inherit;
}

.userCommentDetails h4 span {
  font-size: 15px;
  color: #222;
}

.userCommentDetails small {
  margin: 0;
  display: block;
  font-size: 14px;
  color: #999;
}

.userCommentBody p {
  font-size: 18px;
  font-family: 'Amiri', serif;
  margin: 0;
}
</style>
