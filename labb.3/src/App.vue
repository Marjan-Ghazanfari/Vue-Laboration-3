<template>
  <div class="container row">
    <aside class="col-3 bg-info text-center vh-100 shadow rounded">
      <div class="row pb-2 pt-5 mb-1">
        <router-link class="text-white fw-bold fs-4 shadow" router-link-exact-active to="/" exact>Previews</router-link>
      </div>
      <div class="row py-2">
        <router-link class="text-white fw-bold fs-4 shadow" active-link="active" to="/create" exact>Create post</router-link>
      </div>
    </aside>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    
  }
}
</script>


<style>

</style>
