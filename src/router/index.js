import { createRouter, createWebHistory } from 'vue-router'
import Main from '../views/Main.vue'
import Subscribing from '../views/Subscribing.vue'
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Main',
            component: Main
          },
          {
            path: '/subscribing',
            name: 'Subscribing',
            component: Subscribing
          },
    ] 
})

export default router