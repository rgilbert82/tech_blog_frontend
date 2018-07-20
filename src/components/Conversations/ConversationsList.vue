<template>
  <ul>
    <li v-for="conversation in conversations" :key="conversation.id">
      <ConversationListItem v-bind:conversation="conversation" v-bind:post="post" />
    </li>
  </ul>
</template>

<script>
  import ConversationListItem from './ConversationListItem.vue';

  export default {
    name: 'ConversationsList',

    components: {
      ConversationListItem
    },

    props: {
      conversations: Array,
      post: Object
    }
  }
</script>
