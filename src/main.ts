import { createApp } from 'vue'
import App from './App.vue'
import {router} from './router'
import LenisPlugin from './plugins/lenis'

const app = createApp(App)
app.use(router)
app.use(LenisPlugin)
app.mount('#app')