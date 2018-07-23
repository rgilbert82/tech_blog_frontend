<template>
  <div id="userHeader">
    <div v-if="!!user.image_url" id="userImage">
      <img v-bind:src="user.image_url" alt="user image" />
    </div>
    <div v-else id="userImage" class="userProfileIcon">
      <i class="material-icons">person</i>
    </div>
    <div id="userDetails">
      <h2>{{ user.name }}</h2>
      <small><a :href="`mailto:${user.email}`">{{ user.email }}</a></small>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'UserHeader',

    props: {
      user: Object
    }
  }
</script>

<style>
#userHeader {
  margin-bottom: 30px;
  position: relative;
  padding-bottom: 50px;
  border-bottom: 1px solid #bbb;
  margin-bottom: 60px;
  font-family: 'Lato', sans-serif;
}

#userImage {
  position: absolute;
  left: 0;
  top: 0;
}

.userProfileIcon {
  background-color: #aaa;
  width: 80px;
  height: 80px;
  border-radius: 40px;
}

.userProfileIcon i.material-icons {
  font-size: 80px;
  color: #fff;
}

#userImage img {
  width: 80px;
  border-radius: 40px;
}

#userDetails {
  padding-left: 100px;
}

#userDetails h2 {
  font-size: 24px;
  color: #222;
  margin: 0;
}

#userDetails small {
  font-size: 16px;
  color: #555;
  display: block;
}

#userDetails small a {
  color: inherit;
}

</style>
