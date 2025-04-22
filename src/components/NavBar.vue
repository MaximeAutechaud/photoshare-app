<script setup lang="ts">
import { RouterLink } from 'vue-router'
import axios from 'axios'
import { useUserStore } from '@/stores/user.ts'
import router from '@/router'
function logout() {
  const store = useUserStore();
  const user = store.getUser
  axios.post('http://127.0.0.1:8000/api/logout', {
    params: {
      user_id: user.userId
    },
    headers: {
      Authorization: `Bearer ${user.userToken}`,
      Accept: 'application/json'
    },
  }).then(function() {
    store.logout();
    router.push('login');
  }).catch(res => console.log(res))
}
</script>
<template>
  <nav>
    <h2>Photoshare</h2>
    <div class="ul">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/gallery">Gallery</RouterLink>
      <RouterLink to="/profil">Profil</RouterLink>
      <button class="cursor-pointer" type="button" @click="logout">Logout</button>
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
