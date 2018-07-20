<template>
  <div>
    <b-form v-on:submit.prevent="createPost">
      <b-form-group>
        <label>Image Link</label>
        <b-form-input type="text" v-model='post.image' />
      </b-form-group>
      <b-form-group>
        <label>Title</label>
        <b-form-input type="text" v-model='post.title' />
      </b-form-group>
      <b-form-group>
        <label>Description</label>
        <b-form-textarea v-model='post.description' rows="2" />
      </b-form-group>
      <b-form-group>
        <label>Body</label>
        <b-form-textarea v-model='post.body' rows="4" />
      </b-form-group>
      <b-form-group>
        <b-button type="submit" size="sm" variant="success">Submit</b-button>
      </b-form-group>
    </b-form>
  </div>
</template>

<script>
  import bForm         from 'bootstrap-vue/es/components/form/form';
  import bFormGroup    from 'bootstrap-vue/es/components/form-group/form-group';
  import bFormInput    from 'bootstrap-vue/es/components/form-input/form-input';
  import bFormTextarea from 'bootstrap-vue/es/components/form-textarea/form-textarea';
  import bButton       from 'bootstrap-vue/es/components/button/button';
  import createPostAPI from '../../services/api/posts/createPostAPI.js';

  export default {
    name: 'AdminNewForm',

    components: {
      bForm,
      bFormGroup,
      bFormInput,
      bFormTextarea,
      bButton
    },

    data() {
      return {
        post: {}
      }
    },

    methods: {
      createPost() {
        const postObj = {
          body:        this.post.body,
          image:       this.post.image,
          title:       this.post.title,
          description: this.post.description,
          user_id:     this.$store.state.currentUser.id
        }

        this.post = {};

        return createPostAPI(postObj)
          .then(() => {
            this.$router.push({ name: 'AdminPage' });
          }).catch(() => {
            this.$store.commit('setMessage', 'There was an error creating the post.');
          });
      }
    }
  }
</script>
