<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router'
import { computed } from 'vue'
import NavBar from '@/components/NavBar.vue'
import { useAuthStore } from '@/stores/auth.ts'
import axios from 'axios'
import NavClaude from '@/components/NavClaude.vue'

const auth = useAuthStore()
const user = auth.getUser
if (auth.token) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${auth.token}`
  //auth.fetchUser() // si tu veux les infos user
}

const route = useRoute()

const shouldShowNavbar = computed(() => {
  return !route.meta.hideNavbar
})

</script>

<template>
    <header>
<!--      <NavBar v-if="shouldShowNavbar" :user="user"/>-->
      <NavClaude v-if="shouldShowNavbar" :user="user"/>
    </header>
  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}
</style>
