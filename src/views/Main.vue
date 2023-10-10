<script setup>
import { ref } from 'vue'
import { useAuthStore } from '../store/auth.js'

const authStore = useAuthStore()

const list = ref([
  'Product discovery and building what matters',
  'Measuring to ensure updates are a success',
  'And much more!',
])
</script>
<template>
  <div class="wrapper">
    <form class="form" @submit.prevent>
      <h1 class="form-title">Stay updated!</h1>

      <p>Join 60,000+ product managers receiving monthly updates on:></p>

      <ul class="form-list">
        <li v-for="item in list" class="form-list-item">
          <img class="form__img-list" src="/images/icon-success.svg" />
          {{ item }}
        </li>
      </ul>

      <label class="form-label">
        <div class="flex">
          <span>Email address</span>
          <span class="error">{{ authStore.error }}</span>
        </div>

        <input
          type="email"
          placeholder="email@company.com"
          v-model="authStore.inputForm"
          :class="[authStore.error ? 'text-danger' : 'normally']"
        />
      </label>

      <button class="form-button" @click="authStore.submit">
        Subscribe to monthly newsletter
      </button>

      <div class="attribution">
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank"
          >Frontend Mentor</a
        >. Coded by <a href="#">Yulia Kalashnikova</a>.
      </div>
    </form>

    <div class="wrapper-img">
      <img src="/images/illustration-sign-up-desktop.svg" alt="" />
    </div>
  </div>
</template>
