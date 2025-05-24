import {createApp} from 'vue'
import App from './app/App.vue'
import './app/styles/_global.scss';
import 'vue-tel-input/vue-tel-input.css';
import VueTelInput from "vue-tel-input";
import {createPinia} from "pinia";
import {router} from "./app/router";

const pinia = createPinia();
const app = createApp(App);
// @ts-ignore
app.use(VueTelInput);
app.use(pinia);
app.use(router);
app.mount('#app')
