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
      path: "/clients",
      name: "Clients",
      component: () => import("../views/ClientsView.vue"),
    },
    {
      path: "/clients/create",
      name: "clients_create",
      component: () => import("../views/ClientsCreate.vue"),
    },
  ],
});

export default router;
