<template>
  <div id="postsListWrapper">
    <ul id="postsLists">
      <li v-for="post in posts" :key="post.id">
        <PostListItem v-bind:post="post"/>
      </li>
    </ul>
  </div>
</template>

<script>
  import PostListItem   from '../Posts/PostListItem.vue';

  export default {
    name: 'PostsList',

    components: {
      PostListItem
    },

    props: {
      posts: Array,
      listClass: String
    }
  }
</script>

<style>
  #postsListWrapper {
    box-sizing: border-box;
  }

  #postsListWrapper #postsLists {
    padding: 0;
    list-style: none;
    margin-right: -2%;
  }

  #postsListWrapper #postsLists li {
    display: inline-block;
    margin-right: 2%;
    margin-bottom: 20px;
    width: 48%;
    vertical-align: top;
  }

  @media(max-width: 800px) {
    #postsListWrapper #postsLists {
      margin-right: 0;
    }

    #postsListWrapper #postsLists li {
      margin-right: 0;
      width: 100%;
    }
  }
</style>
