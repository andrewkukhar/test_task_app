import { createApp } from 'vue'
import App from './App.vue'
import store from './vuex/store'
import router from '../src/router/router'

const app = createApp(App)
app.use(store, router);
app.mount('#app');