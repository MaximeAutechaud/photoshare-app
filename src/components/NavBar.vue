<script setup lang="ts">
import { RouterLink } from 'vue-router'
import router from '@/router'
import { useAuth } from '@websanova/vue-auth'
interface User {
  id: string,
  email: string,
  name: string,
  remember_token: string,
  created_at: string,
  updated_at: string,
}
const props = defineProps({
  user: { type: Object },
})
const auth = useAuth()
async function handleLogout() {
  await auth.logout(user)
  await router.push('login')
}
console.log(props)
</script>
<template>
  <nav>
    <h2>Photoshare</h2>
    <div class="ul">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/gallery">Gallery</RouterLink>
      <RouterLink to="/profil">Profil</RouterLink>
      <button class="cursor-pointer" type="button" @click="handleLogout">Logout</button>
    </div>
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  background: #cfd8dc;
}

.ul {
  display: flex;
  list-style: none;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>
