<template>
  <div>
    <template v-if="!!isAdmin">
      <div>
        <AdminHeader />
        <AdminNewForm />
      </div>
    </template>
    <template v-else>
      <div>
        <p>Admin privileges required.</p>
      </div>
    </template>
  </div>
</template>

<script>
  import AdminHeader  from './AdminHeader.vue';
  import AdminNewForm from './AdminNewForm.vue';

  export default {
    name: 'AdminNew',

    components: {
      AdminHeader,
      AdminNewForm
    },

    computed: {
      isAdmin() {
        return this.$store.state.loggedIn && this.$store.state.admin;
      }
    }
  }
</script>
