<template>
  <div class="container col-5 row mt-4 ms-5 card text-center">
      <h1 class="my-4">{{ post.title }}</h1>
      <p>{{ post.body }}</p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Post',
    data() {
        return {
            post: {}
        }
    },
    methods: {
        async wholePost(postId) {
            const result = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            this.post = result.data
        }
    },
    created() {
        this.wholePost(this.$route.params.postId);
    }
}
</script>

<style>

</style>