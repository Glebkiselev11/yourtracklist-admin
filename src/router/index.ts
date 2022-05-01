import { createRouter, createWebHistory } from "vue-router";
import LoadView from "../views/LoadView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: LoadView,
    },
  ],
});

export default router;
