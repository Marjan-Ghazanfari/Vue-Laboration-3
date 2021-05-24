<template>
  <div class="card mb-3 p-4">
    <h2>{{ post.title | to-upper }}</h2>
    <p>{{ post.body | shorten }}</p>
    <router-link class="mt-3 btn btn-info" :to="{ name: 'Post', params: { postId: post.id } }">Read more</router-link>
  </div>
</template>

<script>
export default {
    props: ['post'],
    filters: {
    toUpper(value) {
      return value.toUpperCase()
    },
    shorten(val) {
      return val.slice(0, 70) + '...'
    }
  }
}
</script>

<style>

</style>