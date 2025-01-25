import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import "./assets/tailwind.css";
import "primeicons/primeicons.css";
import "../node_modules/flowbite-vue/dist/index.css";
createApp(App).use(router).mount("#app");
