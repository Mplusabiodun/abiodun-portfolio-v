import { createRouter, createWebHistory } from "vue-router";

import WelcomePage from "./components/WelcomePage.vue";
import HomePage from "./components/HomePage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: WelcomePage },
    { path: "/home", component: HomePage },
    //   { path: "/:notFound(.*)", component: NotFound },
  ],
  scrollBehavior(_, _2, savedposition) {
    // console.log(to, from, savedposition);
    if (savedposition) {
      return savedposition;
    }
    return { left: 0, top: 0 };
  },
});

export default router;
