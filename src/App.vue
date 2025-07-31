<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from '@/components/NavBar.vue'
import { useAuthStore } from '@/stores/auth.ts'
import axios from 'axios'

const auth = useAuthStore()
if (auth.token) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${auth.token}`
  //auth.fetchUser() // si tu veux les infos user
}

</script>

<template>
    <header>
      <NavBar/>
    </header>
  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}
</style>
