<template>
  <confirm-modal></confirm-modal>
  <div>
    <banner />
    <nav-bar @gnb="changeGnb" />
    <DSContent :gnb="gnb" />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<script setup>
import { ref } from "vue";

import Banner from "./components/common/Banner.vue";
import NavBar from "./components/common/NavBar.vue";
import DSContent from "./components/common/DSContent.vue";
import ConfirmModal from "./components/modals/ConfirmModal.vue";

let gnb = ref("introduction");

function changeGnb(newGnb) {
  gnb.value = newGnb;
}
</script>
