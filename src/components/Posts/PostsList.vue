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
    column-count: 2;
    column-gap: 20px;
  }

  #postsListWrapper #postsLists li {
    break-inside: avoid;
    margin-bottom: 20px;
    vertical-align: top;
  }

  @media(max-width: 800px) {
    #postsListWrapper #postsLists {
      column-count: 1;
      column-gap: 0;
    }

    #postsListWrapper #postsLists li {
      width: 100%;
    }
  }
</style>
