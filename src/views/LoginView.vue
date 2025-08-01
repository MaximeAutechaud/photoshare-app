<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const email = ref('')
const password = ref('')
const router = useRouter()
const auth = useAuthStore()

async function handleLogin() {
  const success = await auth.login(email.value, password.value)
  if (success) {
    await router.push('/')
  }
}
</script>

<template>
  <form @submit.prevent="handleLogin" class="max-w-md mx-auto mt-10">
    <input v-model="email" type="email" required class="border p-2 mb-3 w-full" placeholder="Email" />
    <input v-model="password" type="password" required class="border p-2 mb-3 w-full" placeholder="Mot de passe" />
    <button type="submit" class="w-full bg-blue-600 text-white py-2">Connexion</button>
    <p v-if="auth.error" class="text-red-500 mt-2">{{ auth.error }}</p>
  </form>
</template>

<style scoped>

</style>
