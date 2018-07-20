<template>
  <div class="commentListItem">
    <div class="commentListItemHeader">
      <div class="commentUserImage">
        <img v-bind:src="comment.user_avatar" alt="user image" />
      </div>
      <div class="commentUserDetails">
        <router-link :to="{ name: 'UserPage', params: { id: comment.user_id }}">
          <h3>{{comment.username}}</h3>
        </router-link>
        <small>{{dateString}}</small>
      </div>
    </div>

    <p>{{comment.body}}</p>
  </div>
</template>

<script>
  import formatDate from '../../services/misc/formatDate.js';

  export default {
    name: 'CommentListItem',

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
  .commentListItem {
    box-sizing: border-box;
    padding: 15px;
    border-bottom: 1px solid #bbb;
    color: #444;
    font-family: 'Lato', sans-serif;
  }

  .commentListItem h3 {
    font-size: 16px;
    margin: 0;
    color: rgba(0, 100, 0, 1);
  }

  .commentListItem small {
    margin: 0;
    display: block;
    font-size: 14px;
    color: #999;
  }

  .commentListItem p {
    font-size: 18px;
    font-family: 'Amiri', serif;
    margin: 0;
  }

  .commentListItemHeader {
    position: relative;
    margin-bottom: 20px;
  }

  .commentUserImage {
    position: absolute;
    top: 0;
    left: 0;
  }

  .commentUserImage img {
    width: 40px;
    border-radius: 20px;
  }

  .commentUserDetails {
    padding-left: 50px;
  }
</style>
