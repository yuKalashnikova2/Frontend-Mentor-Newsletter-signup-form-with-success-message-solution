import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import router from '../router/index.js'

export const useAuthStore = defineStore('auth', () => {
  const inputForm = ref('')
  const error = ref('')
  const submit = computed(() => {
    if (inputForm.value !== '' && inputForm.value.includes('@')) {
      router.push('/subscribing')
    } else {
      error.value = 'Valid email required'
    }
  })
  return { inputForm, submit, error }
})
