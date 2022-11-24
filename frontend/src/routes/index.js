import { createRouter, createWebHistory } from "vue-router";

import Intro from "@/components/views/Intro.vue";
import Develop from "@/components/views/Develop.vue";
import Science from "@/components/views/Science.vue";
import Economics from "@/components/views/Economics.vue";
import Life from "@/components/views/Life.vue";

const routes = [
  {
    path: "/",
    redirect: "/intro",
  },
  {
    path: "/intro",
    component: Intro,
  },
  {
    path: "/develop",
    component: Develop,
  },
  {
    path: "/science",
    component: Science,
  },
  {
    path: "/economics",
    component: Economics,
  },
  {
    path: "/life",
    component: Life,
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
