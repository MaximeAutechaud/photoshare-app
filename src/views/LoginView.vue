<script setup lang="ts">
import axios from 'axios'
import { useUserStore } from '@/stores/user.ts'
import router from '@/router'

interface LoginForm {
  email: string;
  password: string;
  errors: string[];
}
const form:LoginForm = {
  email: '',
  password: '',
  errors: []
}
const store = useUserStore()
function login() {
  axios.post('http://127.0.0.1:8000/api/login', {
    email: form.email,
    password: form.password,
  }).then(function (response) {
    store.setToken(response.data.token);
    store.setUserId(response.data.user.id);
    router.push('home');
  }).catch(function (error) {
    console.log(error);
  })
}
</script>

<template>
<h1>Login view</h1>
<div>
  <form @submit.prevent="login">
    <div class="form-group">
      <label for="email">Email</label>
      <input v-model="form.email" class="border border-blue-2" name="email" id="email" type="email" />
    </div>
    <div class="form-group">
      <label for="password">Password</label>
      <input v-model="form.password" class="border border-blue-2" name="password" id="password" />
    </div>
    <input type="submit" value="Login">
  </form>
</div>
</template>

<style scoped>

</style>
