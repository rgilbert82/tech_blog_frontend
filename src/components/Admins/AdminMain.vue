<template>
  <div>
    <AdminHeader />
    <AuthorHeader v-bind:author="admin" />
    <AuthorPosts  v-bind:author="admin" />
  </div>
</template>

<script>
  import AuthorHeader from '../Authors/AuthorHeader.vue';
  import AuthorPosts  from '../Authors/AuthorPosts.vue';
  import AdminHeader  from './AdminHeader.vue';

  export default {
    name: 'AdminMain',

    components: {
      AuthorHeader,
      AuthorPosts,
      AdminHeader
    },

    data() {
      return {
        admin: this.$store.state.currentUser
      }
    }
  }
</script>
