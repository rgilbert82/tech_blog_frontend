<template>
  <div>
    <h2>ADMIN</h2>
    <ul id="adminNav">
      <li>
        <router-link :to="{ name: 'AdminPage', params: {} }">
          Admin Home
        </router-link>
      </li>
      <li class="listDivider">|</li>
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

<style>
  #adminNav {
    list-style: none;
    padding: 0 0 20px 0;
    margin-bottom: 20px;
    border-bottom: 1px solid #bbb;
  }

  #adminNav li {
    display: inline-block;
  }

  .listDivider {
    margin: 0 20px;
  }
</style>
