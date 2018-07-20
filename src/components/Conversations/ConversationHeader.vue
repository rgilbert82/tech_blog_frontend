<template>
  <div id="conversationHeader">
    <div id="conversationHeaderPost">
      <span>conversation from the post:</span>
      <router-link id="conversationHeaderPostLink" :to="{ name: 'PostPage', params: { slug: post.slug } }"><h2>{{ post.description }}</h2></router-link>
    </div>
    <div id="conversationHeaderAuthor">
      <div id="conversationHeaderAuthorImage">
        <img v-bind:src="post.user_avatar" alt="author image" />
      </div>
      <div id="conversationHeaderAuthorDetails">
        <h4><span>by</span> <router-link id="conversationHeaderAuthorLink" :to="{ name: 'AuthorPage', params: { id: post.user_id } }">{{ post.username }}</router-link></h4>
        <small>{{ dateString }}</small>
      </div>
    </div>
  </div>
</template>

<script>
  import formatDate from '../../services/misc/formatDate.js';

  export default {
    name: 'ConversationHeader',

    props: {
      post: Object
    },

    computed: {
      dateString() {
        return formatDate(this.post.created_at);
      }
    }
  }
</script>

<style>
  #conversationHeader {
    padding-bottom: 20px;
    border-bottom: 1px solid #bbb;
    margin-bottom: 60px;
    font-family: 'Lato', sans-serif;
  }

  #conversationHeaderPost {
    margin-bottom: 20px;
  }

  #conversationHeaderPost span {
    font-size: 15px;
    color: #999;
  }

  #conversationHeaderPost #conversationHeaderPostLink {
    color: #444;
  }

  #conversationHeaderAuthor {
    position: relative;
    margin-bottom: 30px;
  }

  #conversationHeaderAuthorImage {
    position: absolute;
    left: 0;
    top: 0;
  }

  #conversationHeaderAuthorImage img {
    width: 60px;
    border-radius: 30px;
  }

  #conversationHeaderAuthorDetails {
    padding-left: 80px;
  }

  #conversationHeaderAuthorDetails small {
    font-size: 14px;
    color: #555;
    display: block;
  }

  #conversationHeaderAuthor h4 {
    font-size: 17px;
    color: #222;
    margin: 0;
  }

  #conversationHeaderAuthor h4 span {
    font-size: 15px;
    margin-right: 4px;
  }

  #conversationHeaderAuthor h4 #conversationHeaderAuthorLink {
    color: inherit;
    font-size: 18px;
  }
</style>
