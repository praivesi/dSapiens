import { createApp } from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import router from "./routes";
import store from "./store";
import axios from "redaxios";

loadFonts();

axios.defaults.withCredentials = true;

createApp(App).use(vuetify).use(router).use(store).use(axios).mount("#app");
