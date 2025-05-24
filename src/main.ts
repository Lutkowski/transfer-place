import {createApp} from 'vue'
import App from './app/App.vue'
import './app/styles/_global.scss';
import 'vue-tel-input/vue-tel-input.css';
import VueTelInput from "vue-tel-input";
import {createPinia} from "pinia";
import {router} from "./app/router";
import {useAuthStore} from "./app/providers/auth.store.ts";

const pinia = createPinia();
const app = createApp(App);
// @ts-ignore
app.use(VueTelInput);
app.use(pinia);
app.use(router);

const auth = useAuthStore();
auth.initFromStorage();

app.mount('#app')
