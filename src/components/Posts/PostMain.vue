<template>
  <div id="postMain">
    <div id="postMainHeader">
      <div id="postAuthor">
        <div v-if="!!post.user_avatar" id="postAuthorImage">
          <img v-bind:src="post.user_avatar" alt="author image" />
        </div>
        <div v-else id="postAuthorImage" class="postPageUserIcon">
          <i class="material-icons">person</i>
        </div>
        <div id="postAuthorDetails">
          <h4><span>by</span> <router-link id="postAuthorLink" :to="{ name: 'AuthorPage', params: { id: post.user_id }}">{{post.user_name}}</router-link></h4>
          <small>{{ post.author_description }}</small>
          <small>{{ dateString }}</small>
        </div>
      </div>

      <div id="postHeaderDetails">
        <h2>{{ post.title }}</h2>
        <img v-bind:src="post.image" alt="post image" />
        <h3>{{ post.description }}</h3>
      </div>
    </div>

    <div id="postMainBody">
      <p v-for="par in getParagraphs">
        {{ par }}
      </p>
    </div>

    <PostConversations v-bind:post="post"/>
  </div>
</template>

<script>
  import PostConversations from '../Conversations/PostConversations.vue';
  import formatDate        from '../../services/misc/formatDate.js';

  export default {
    name: 'PostMain',

    components: {
      PostConversations
    },

    props: {
      post: Object
    },

    computed: {
      dateString() {
        return formatDate(this.post.created_at);
      },

      getParagraphs() {
        return this.post.body.split('\n').filter((par) => { return !!par; });
      }
    }
  }
</script>

<style>
  #postMainHeader {
    font-family: 'Lato', sans-serif;
  }

  #postAuthor {
    position: relative;
    margin-bottom: 30px;
  }

  #postAuthorImage {
    position: absolute;
    left: 0;
    top: 0;
  }

  #postAuthorImage img {
    width: 60px;
    border-radius: 30px;
  }

  .postPageUserIcon {
    background-color: #aaa;
    width: 60px;
    height: 60px;
    border-radius: 30px;
  }

  .postPageUserIcon i.material-icons {
    font-size: 60px;
    color: #fff;
  }

  #postAuthorDetails {
    padding-left: 80px;
  }

  #postAuthorDetails small {
    font-size: 14px;
    color: #555;
    display: block;
  }

  #postHeaderDetails h2 {
    margin: 0;
    font-size: 34px;
    font-weight: 700;
  }

  #postHeaderDetails h3 {
    margin: 0;
    font-size: 26px;
    font-weight: 400px;
    color: #444;
  }

  #postHeaderDetails img {
    width: 100%;
    margin: 20px 0;
  }

  h4 {
    font-size: 17px;
    color: #222;
    margin: 0;
  }

  h4 span {
    font-size: 15px;
    margin-right: 4px;
  }

  h4 #postAuthorLink {
    color: inherit;
  }

  #postMainBody {
    margin: 30px 0;
    padding-bottom: 30px;
    border-bottom: 1px solid #ccc;
    font-family: 'Amiri', serif;
    font-size: 20px;
    color: #444;
  }
</style>
