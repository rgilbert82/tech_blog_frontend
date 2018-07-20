<template>
  <div>
    <template v-if="!!isAdmin">
      <AdminMain />
    </template>
    <template v-else>
      <div>
        <p>Admin privileges required.</p>
      </div>
    </template>
  </div>
</template>

<script>
  import AdminMain   from './AdminMain.vue';

  export default {
    name: 'AdminPage',

    components: {
      AdminMain
    },

    computed: {
      isAdmin() {
        return this.$store.state.loggedIn && this.$store.state.admin;
      }
    }
  }
</script>
