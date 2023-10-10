<script setup>
import { ref } from 'vue'
import router from '../router';
const inputForm = ref('')

const error = ref('')
const list = ref([
  'Product discovery and building what matters',
  'Measuring to ensure updates are a success',
  'And much more!',
])
const submit = (input) => {
  if(inputForm.value !== '' && inputForm.value.includes('@')) {
    router.push('/subscribing')
  }
   else {
    error.value = 'Valid email required'
  }

}

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
          <span class="error">{{ error }}</span>
        </div>
       
        <input
          type="email"
          placeholder="email@company.com"
          v-model="inputForm"
          :class="[error ? 'text-danger' : 'normally']"
        />
      </label>
    
      <button class="form-button" @click="submit(input)">
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
