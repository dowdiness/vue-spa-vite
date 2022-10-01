import type { App as Application } from "vue";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/main.css";
const app: Application<Element> = createApp(App);

app.use(router);

app.mount("#app");
