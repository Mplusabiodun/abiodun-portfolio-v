import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./components/Main/HomePage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/home", component: HomePage },
    // { path: "/abiodun_resume", component: AboutMe },
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
