import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/todos/:id",
      name: "todo",
      component: () => import("../feat/todo/TodoItem.vue"),
    },
  ],
});

export default router;
