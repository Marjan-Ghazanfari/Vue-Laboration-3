import Vue from 'vue'
import VueRouter from 'vue-router'
import Previews from '../views/Previews.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Previews',
    component: Previews
  },
  {
    path: '/create',
    name: 'CreatePost',
    component: () => import('../views/CreatePost.vue')
  },
  {
    path: '/post/:id',
    name: 'Post',
    component: () => import('../views/Post.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
