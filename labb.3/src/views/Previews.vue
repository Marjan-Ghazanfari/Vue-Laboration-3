<template>
  <div class="container col-9 row ms-auto mt-4">
    <input v-model="search" class="form-control" placeholder="Search title..." type="text">
    <div v-if="posts.length">
       <ViewPosts v-for="post in filteredPosts" :key="post.id" :post="post" />
    </div>
    <div v-else>
      <h2>No posts found</h2>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import ViewPosts from '../components/ViewPosts'

export default {
  name: 'Previews',
  components: {
    ViewPosts
  },
  data() {
    return {
      posts: [],
      search: ''
    }
  },
  computed: {
    filteredPosts() {
      return this.posts.filter(p => p.title.toUpperCase().match(this.search.toUpperCase()));
    }
  },
  methods: {
    async getPosts() {
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
      this.posts = res.data
    }
  },
  created() {
    this.getPosts()
  }
}
</script>
