<template>
  <div>
    <h2>Comments</h2>
    <template v-if="!pageLoaded">
      <CommentsLoading />
    </template>
    <template v-else>
      <div>
        <NewConversationForm v-bind:post="post" />
        <template v-if="noComments">
          <p>No Comments</p>
        </template>
        <template v-else>
          <ConversationsList v-bind:conversations="conversations" v-bind:post="post" />
        </template>
      </div>
    </template>
  </div>
</template>

<script>
  import CommentsLoading         from '../Misc/CommentsLoading.vue';
  import ConversationsList       from './ConversationsList.vue';
  import NewConversationForm     from './NewConversationForm.vue';
  import createConversationAPI   from '../../services/api/conversations/createConversationAPI.js';
  import getPostConversationsAPI from '../../services/api/conversations/getPostConversationsAPI.js';

  export default {
    name: 'PostConversations',

    components: {
      CommentsLoading,
      ConversationsList,
      NewConversationForm
    },

    props: {
      post: Object
    },

    data() {
      return {
        pageLoaded: false,
        conversations: []
      }
    },

    created: function() {
      this.fetchConversations();
    },

    computed: {
      noComments() {
        return this.conversations.length === 0;
      }
    },

    methods: {
      fetchConversations() {
        return getPostConversationsAPI(this.post.id)
          .then((data) => {
            this.conversations = data;
            this.pageLoaded    = true;
          }).catch(() => {
            this.$store.commit('setMessage', 'There was an error loading the comments.');
          });
      },

      createConversation(convObj) {
        return createConversationAPI(convObj)
          .then((data) => {
            this.conversations = [data, ...this.conversations];
          }).catch(() => {
            this.$store.commit('setMessage', 'There was an error creating the comment.');
          });
      }
    }
  }
</script>
