import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import About from "../pages/About.vue";
import Testimonial from "../pages/Testimonial.vue";
import PageNotFound from "../components/PageNotFound.vue";
import Video from "../pages/Video.vue";
import WorksMan from "../pages/WorksMan.vue";
import IndemnityFund from "../pages/IndemnityFund.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/testimonial",
    name: "Testimonial",
    component: Testimonial,
  },

  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: PageNotFound,
  },
  {
    path: "/video",
    name: "Video",
    component: Video,
  },
  {
    path: "/worksman",
    name: "WorksMan",
    component: WorksMan,
  },
  {
    path: "/indemnityfund",
    name: "IndemnityFund",
    component: IndemnityFund,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
