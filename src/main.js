import { createApp } from 'vue';
import 'bootstrap';
import axios from 'axios';
import VueAxios from 'vue-axios';
import App from './App.vue';
import router from './router';
import toCurrency from './assets/javascript/toCurrency';

const app = createApp(App);

// 將 toCurrency 加到全域屬性下
app.config.globalProperties.toCurrency = toCurrency;

app.use(VueAxios, axios);
app.use(router);
app.mount('#app');
