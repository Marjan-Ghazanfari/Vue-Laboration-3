<template>
  <div class="container col-5 mt-4 ms-5">
    <div class="d-flex">
        <form @submit.prevent="submitPost">
          <div class="mb-2">
            <input type="text" class="form-control" id="title" placeholder="Title..." v-model="post.title">
          </div>
          <div class="mb-3">
            <textarea type="text" class="form-control" rows="19" id="body" placeholder="Body..." v-model="post.body"></textarea>
          </div>
          <div class="mb-3">
            <button type="submit" class="btn btn-info btn-block">Submit</button>
          </div>
        </form>
        <form class="ms-auto">
          <div class="mb-2">
            {{ post.title }}
          </div>
          <div class="mb-3">
            {{ post.body }}
          </div>
        </form>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'

export default {
  data() {
    return {
      post: {
          title: '',
          body: ''
      }
    }
  },
  methods: {
    async submitPost() {
      // const result = await axios.post('https://us-central1-blog-webapi.cloudfunctions.net/api/posts/', Object.assign({}, this.post));
      // console.log(result);
      // this.post = {title: '', body: ''};
      // this.$router.push({name: 'Previews'});
    }
  }
}
</script>

<style>

</style>