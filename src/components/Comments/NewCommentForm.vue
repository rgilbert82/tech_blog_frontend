<template>
  <div id="newCommentForm">
    <template v-if="!!isLoggedIn">
      <b-form v-on:submit.prevent="createComment">
        <b-form-group>
          <b-form-textarea id="formBody" v-model='comment.body' placeholder='add to this conversation...' rows="2"/>
        </b-form-group>
        <b-form-group>
          <b-button :disabled="!validForm" type="submit" size="sm" variant="success">Submit</b-button>
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
    name: 'NewCommentForm',

    components: {
      bForm,
      bFormGroup,
      bFormTextarea,
      bButton
    },

    props: {
      conversation: Object
    },

    data() {
      return {
        comment: {}
      }
    },

    computed: {
      isLoggedIn() {
        return this.$store.state.loggedIn;
      },

      validForm() {
        return this.comment.body && this.comment.body.length > 0;
      }
    },

    methods: {
      createComment() {
        const commentObj = {
          body: this.comment.body,
          user_id: this.$store.state.currentUser.id,
          conversation_id: this.conversation.id
         }

        this.$parent.createComment(commentObj);
        this.comment.body = '';
      }
    }
  }
</script>

<style>
  #newCommentForm {
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
