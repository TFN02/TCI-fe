// main.js
import { createApp } from 'vue';
import App from './App.vue';
import './style.css';
import router from './router.js';

const app = createApp(App);

// Gunakan router sebagai plugin
app.use(router);

// Render aplikasi Vue
app.mount('#app');
