<template>
  <div class="postListItem">
    <div class="postListItemImage">
      <router-link :to="{ name: 'PostPage', params: { slug: post.slug } }">
        <img v-bind:src="post.image" alt="post image" />
      </router-link>
    </div>

    <div class="postListItemHeader">
      <div v-if="hasUser" class="postListItemHeaderImage">
        <img v-bind:src="post.user_avatar" alt="user image" />
      </div>
      <div class="postListItemHeaderDetails" v-bind:class="{ postListItemHeaderDetailsPadded: hasUser }">
        <h3><router-link class="postTitleLink" :to="{ name: 'PostPage', params: { slug: post.slug } }">
          {{ post.title }}
        </router-link></h3>
        <div v-if="hasUser">
          <h4><span>By</span> <router-link class="postAuthorLink" :to="{ name: 'AuthorPage', params: { id: post.user_id }}">{{post.user_name}}</router-link></h4>
        </div>
        <small>{{ dateString }}</small>

        <p>{{ post.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import formatDate from '../../services/misc/formatDate.js';

  export default {
    name: 'PostListItem',

    props: {
      post: Object
    },

    computed: {
      dateString() {
        return formatDate(this.post.created_at);
      },

      hasUser() {
        return this.post.user_name;
      }
    }
  }
</script>

<style>
  .postListItem {
    padding: 15px;
    box-sizing: border-box;
    background-color: #fff;
    border: 1px solid #bbb;
    border-radius: 4px;
    box-shadow: 0 1px 1px #ccc;
    color: #444;
    font-family: 'Lato', sans-serif;
  }

  .postListItemImage {
    margin-bottom: 15px;
  }

  .postListItemImage img {
    width: 100%;
    border-radius: 4px;
  }

  .postListItemHeader {
    position: relative;
    margin-bottom: 20px;
  }

  .postListItemHeaderImage {
    position: absolute;
    top: 0;
    left: 0;
  }

  .postListItemHeaderImage img {
    width: 40px;
    border-radius: 20px;
  }

  .postListItemHeaderDetailsPadded {
    padding-left: 50px;
  }

  .postListItemHeaderDetails h3 {
    font-size: 22px;
    margin: 0;
    color: #444;
  }

  .postTitleLink, .postTitleLink:hover {
    color: inherit;
  }

  .postListItemHeaderDetails h4 {
    font-size: 16px;
    margin: 0;
    color: rgba(0, 100, 0, 1);
  }

  .postListItemHeaderDetails h4 .postAuthorLink {
    color: inherit;
  }

  .postListItemHeaderDetails h4 span {
    font-size: 14px;
    color: #222;
  }

  .postListItemHeaderDetails small {
    margin: 0;
    display: block;
    font-size: 14px;
    color: #999;
  }

  .postListItemHeaderDetails p {
    margin: 20px 0 0 0;
    font-size: 20px;
    font-family: 'Amiri', serif;
  }
</style>
