<template>
  <div class="commentListItem">
    <a class="commentDeleteLink" v-if="currentUserComment" v-on:click.prevent="deleteComment" href="">
      Delete
    </a>

    <div class="commentListItemHeader">
      <div v-if="!!comment.user_avatar" class="commentUserImage">
        <img v-bind:src="comment.user_avatar" alt="user image" />
      </div>
      <div v-else class="commentUserImage userCommentIcon">
        <i class="material-icons">person</i>
      </div>
      <div class="commentUserDetails">
        <router-link class="commentUserLink" :to="{ name: 'UserPage', params: { id: comment.user_id }}">
          <h3>{{comment.username}}</h3>
        </router-link>
        <small>{{dateString}}</small>
      </div>
    </div>

    <p v-for="par in getParagraphs">
      {{ par }}
    </p>
  </div>
</template>

<script>
  import deleteCommentAPI from '../../services/api/comments/deleteCommentAPI.js';
  import formatDate from '../../services/misc/formatDate.js';

  export default {
    name: 'CommentListItem',

    props: {
      comment: Object,
      editable: Boolean
    },

    methods: {
      deleteComment() {
        return deleteCommentAPI(this.comment.id)
          .then(() => {
            this.$parent.deleteComment(this.comment.id);
          }).catch(() => {
            this.$store.commit('setMessage', 'There was an error deleting the comment.');
          });
      }
    },

    computed: {
      dateString() {
        return formatDate(this.comment.created_at);
      },

      getParagraphs() {
        return this.comment.body.split('\n').filter((par) => { return !!par; });
      },

      currentUserComment() {
        return !!this.editable && this.$store.state.loggedIn && (this.$store.state.admin || this.$store.state.currentUser.id === this.comment.user_id);
      }
    }
  }
</script>

<style>
  .commentListItem {
    position: relative;
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

  .commentListItem p + p {
    margin-top: 15px;
  }

  .commentListItemHeader {
    position: relative;
    margin-bottom: 20px;
    padding-right: 50px;
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

  .userCommentIcon {
    background-color: #aaa;
    width: 40px;
    height: 40px;
    border-radius: 20px;
  }

  .userCommentIcon i.material-icons {
    font-size: 40px;
    color: #fff;
  }

  .commentUserDetails {
    padding-left: 50px;
  }

  .commentDeleteLink {
    position: absolute;
    line-height: 20px;
    top: 5px;
    right: 8px;
    font-size: 14px;
  }
</style>
