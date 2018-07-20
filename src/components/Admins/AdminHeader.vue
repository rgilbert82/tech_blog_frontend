<template>
  <div>
    <h2>ADMIN</h2>
    <ul>
      <li>
        <router-link :to="{ name: 'AdminPage', params: {} }">
          Admin Home
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'AdminNew', params: {} }">
          New Post
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'AdminHeader'
  }
</script>
