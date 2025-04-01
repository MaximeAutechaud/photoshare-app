<script setup lang="ts">
interface SignupForm {
  email: string|null;
  password: string|null;
  passwordConfirm: string|null;
  errors: string[];
}
const form:SignupForm = {
  email: null,
  password: null,
  passwordConfirm: null,
  errors: []
}

function checkForm() {
  if (form.email && form.password && form.passwordConfirm) {
    return true
  }
  form.errors = [];
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
</script>

<template>
  <h1>Sign up view</h1>
  <p v-if="form.errors.length">
    <b>Please correct the following error(s):</b>
    <ul>
      <li v-for="error in form.errors" v-bind:key="error">{{ error }}</li>
    </ul>
  </p>
  <form id="signup-form" method="POST" action="http://127.0.0.1:8000/signup" @submit="checkForm">
    <div class="form-group">
      <label for="email">Email</label>
      <input v-model="form.email" class="border border-blue-2" name="email" id="email" type="email" />
    </div>
    <div class="form-group">
      <label for="password">Password</label>
      <input v-model="form.password" class="border border-blue-2" name="password" id="password" type="password" />
    </div>
    <div class="form-group">
      <label for="password-confirm">Confirm password</label>
      <input
        v-model="form.passwordConfirmation"
        class="border border-blue-2"
        name="password-confirm"
        id="password-confirm"
        type="password"
      />
    </div>
    <input type="submit" value="Signup">
  </form>
</template>

<style scoped></style>
