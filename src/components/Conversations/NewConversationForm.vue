<template>
  <div>
    <template v-if="!!isLoggedIn">
      <b-form id="newConversationForm" v-on:submit.prevent="createConversation">
        <b-form-group>
          <b-form-textarea id="formBody" v-model='comment.body' placeholder='write a response...' rows="2" />
        </b-form-group>
        <b-form-group>
          <b-button type="submit" size="sm" variant="success">Submit</b-button>
        </b-form-group>
      </b-form>
    </template>
    <template v-else>
      <p class="warning">You must be logged in to comment</p>
    </template>
  </div>
</template>

<script>
  import bForm         from 'bootstrap-vue/es/components/form/form';
  import bFormGroup    from 'bootstrap-vue/es/components/form-group/form-group';
  import bFormTextarea from 'bootstrap-vue/es/components/form-textarea/form-textarea';
  import bButton       from 'bootstrap-vue/es/components/button/button';

  export default {
    name: 'NewConversationForm',

    components: {
      bForm,
      bFormGroup,
      bFormTextarea,
      bButton
    },

    props: {
      post: Object
    },

    data() {
      return {
        comment: {}
      }
    },

    computed: {
      isLoggedIn() {
        return this.$store.state.loggedIn;
      }
    },

    methods: {
      createConversation() {
        const convObj = {
          body: this.comment.body,
          user_id: this.$store.state.currentUser.id,
          post_id: this.post.id
         }

        this.$parent.createConversation(convObj);
        this.comment.body = '';
      }
    }
  }
</script>

<style>
  #newConversationForm {
    box-sizing: border-box;
    margin: 0 0 40px 0;
  }

  #formBody {
    border: 1px solid #bbb;
    border-radius: 4px;
    box-shadow: 0 1px 1px #ccc;
    resize: none;
  }

</style>
