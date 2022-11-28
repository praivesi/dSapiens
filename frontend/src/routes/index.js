import { createRouter, createWebHistory } from "vue-router";

import Intro from "@/components/views/Intro.vue";
import Science from "@/components/views/Science.vue";
import Economics from "@/components/views/Economics.vue";
import Life from "@/components/views/Life.vue";
import SwHw from "@/components/views/SwHw.vue";
import AdvancedCS from "@/components/views/AdvancedCS.vue";
import Philosophy from "@/components/views/Philosophy.vue";

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
    path: "/swhw",
    component: SwHw,
  },
  {
    path: "/advancedCS",
    component: AdvancedCS,
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
    path: "/philosophy",
    component: Philosophy,
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
