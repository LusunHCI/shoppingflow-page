import './assets/main.css'
import './tailwind.css'
import { createApp } from 'vue'
import App from './App_test.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
