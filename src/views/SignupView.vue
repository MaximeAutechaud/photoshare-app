<script setup lang="ts">
import axios from 'axios'

interface SignupForm {
  name: string
  email: string;
  password: string;
  passwordConfirm: string;
  errors: string[];
}
const form:SignupForm = {
  name: '',
  email: '',
  password: '',
  passwordConfirm: '',
  errors: []
}

function checkForm() {
  if (form.name && form.email && form.password && form.passwordConfirm) {
    return true
  }
  form.errors = [];
  if (!form.name) {
    form.errors.push('Name required!');
  }
  if (!form.email) {
    form.errors.push('Email required!');
  }
  if (!form.password) {
    form.errors.push('Password required!');
  }
  if (form.password !== form.passwordConfirm) {
    form.errors.push('Password must match!');
  }
}

function signup() {
  axios.post('http://127.0.0.1:8000/api/signup', {
    name: form.name,
    email: form.email,
    password: form.password,
    password_confirmation: form.passwordConfirm,
  }).then(function (response) {
    console.log(response);
    // se connecter + rediriger sur home
  }).catch(function (error) {
    console.log(error);
  })
}
</script>

<template>
  <h1>Sign up view</h1>
  <p v-if="form.errors.length">
    <b>Please correct the following error(s):</b>
    <ul>
      <li v-for="error in form.errors" v-bind:key="error">{{ error }}</li>
    </ul>
  </p>
  <form id="signup-form" method="POST" action="" @submit="checkForm">
    <div class="form-group">
      <label for="name">Name</label>
      <input v-model="form.name" class="border border-blue-2" name="name" id="name" type="text" />
    </div>
    <div class="form-group">
      <label for="email">Email</label>
      <input v-model="form.email" class="border border-blue-2" name="email" id="email" type="email" />
    </div>
    <div class="form-group">
      <label for="password">Password</label>
      <input v-model="form.password" class="border border-blue-2" name="password" id="password" />
    </div>
    <div class="form-group">
      <label for="password-confirm">Confirm password</label>
      <input
        v-model="form.passwordConfirm"
        class="border border-blue-2"
        name="password-confirm"
        id="password-confirm"
      />
    </div>
    <input type="submit" value="Signup" @click.prevent="signup">
  </form>
</template>

<style scoped></style>
