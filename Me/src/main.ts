import './assets/main.css'
import 'primeicons/primeicons.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';

const app = createApp(App)
app.use(PrimeVue);
app.use(createPinia())
app.use(router)

app.mount('#app')
