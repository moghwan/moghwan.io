import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { inject } from '@vercel/analytics';

import './assets/main.css'

const app = createApp(App)

app.use(router)
inject();

app.mount('#app')
