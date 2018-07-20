<template>
  <div>
    <template v-if="!!isLoggedIn">
      <b-form v-on:submit.prevent="createComment">
        <b-form-group>
          <b-form-textarea v-model='comment.body' placeholder='Create a comment' rows="2"/>
        </b-form-group>
        <b-form-group>
          <b-button type="submit" size="sm" variant="success">Submit</b-button>
        </b-form-group>
      </b-form>
    </template>
    <template v-else>
      <p>You must be logged in to comment</p>
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
