<template>
  <confirm-modal></confirm-modal>
  <div>
    <banner />
    <NavBar />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<script setup>
import Banner from "./components/common/Banner.vue";
import NavBar from "./components/common/NavBar.vue";
import ConfirmModal from "./components/modals/ConfirmModal.vue";
</script>
