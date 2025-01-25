import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "HomeView",
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/chat",
    name: "Chat",
    component: () => import("../views/ChatView.vue"),
  },
  {
    path: "/chat/:roomId",
    name: "ChatById",
    props: true,
    component: () => import("../views/ChatView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
