import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./components/Main/HomePage.vue";
import MoreProjects from "./components/Main/MoreProjects.vue";
import MyBlogs from "./components/Main/MyBlogs.vue";
import NotFound from "./components/UI/NotFound.vue";
import ToolBox from "./components/Main/AboutDivision/ToolBox.vue";
import TheConnection from "./components/Main/AboutDivision/TheConnection.vue";
import AboutMe from "./components/Main/AboutDivision/AboutMe.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/home", name: "home", component: HomePage },
    { path: "/projects", name: "projects", component: MoreProjects },
    { path: "/blogs", name: "blogs", component: MyBlogs },
    { path: "/:notFound(.*)", component: NotFound },

    { path: "/toolbox", component: ToolBox },
    { path: "/connections", component: TheConnection },
    { path: "/about", component: AboutMe },
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
