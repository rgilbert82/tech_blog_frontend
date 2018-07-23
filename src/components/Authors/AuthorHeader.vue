<template>
  <div id="authorHeader">
    <div v-if="author.image_url" id="authorImage">
      <img v-bind:src="author.image_url" />
    </div>
    <div v-else id="authorImage" class="authorProfileIcon">
      <i class="material-icons">person</i>
    </div>
    <div id="authorDetails">
      <h2>{{ author.name }}</h2>
      <small><a :href="`mailto:${author.email}`">{{ author.email }}</a></small>
      <p>{{ author.author_description }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'AuthorHeader',

    props: {
      author: Object
    }
  }
</script>

<style>
#authorHeader {
  margin-bottom: 30px;
  position: relative;
  padding-bottom: 20px;
  border-bottom: 1px solid #bbb;
  margin-bottom: 60px;
  font-family: 'Lato', sans-serif;
}

#authorImage {
  position: absolute;
  left: 0;
  top: 0;
}

#authorImage img {
  width: 80px;
  border-radius: 40px;
}

.authorProfileIcon {
  background-color: #aaa;
  width: 80px;
  height: 80px;
  border-radius: 40px;
}

.authorProfileIcon i.material-icons {
  font-size: 80px;
  color: #fff;
}

#authorDetails {
  padding-left: 100px;
}

#authorDetails h2 {
  font-size: 24px;
  color: #222;
  margin: 0;
}

#authorDetails small {
  font-size: 16px;
  color: #555;
  display: block;
}

#authorDetails small a {
  color: inherit;
}

#authorDetails p {
  margin: 10px 0 0 0 ;
  font-size: 28px;
  font-family: 'Amiri', serif;
}

</style>
