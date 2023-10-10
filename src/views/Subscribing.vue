<script setup>
import { RouterLink } from 'vue-router'
import { useAuthStore } from '../store/auth'

const authStore = useAuthStore()
</script>
<template>
  <div class="subscribing">
    <img src="/images/icon-success.svg" />
    <h1>Thanks for subscribing!</h1>
    A confirmation email has been sent to
    <span class="email-strong">{{ authStore.inputForm }} </span>
    Please open it and click the button inside to confirm your subscription.
    <RouterLink to="/">
      <button class="form-button">Dismiss message</button>
    </RouterLink>
  </div>
</template>
