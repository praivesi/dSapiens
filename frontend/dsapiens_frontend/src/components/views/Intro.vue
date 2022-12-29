<template>About me.</template>

<script>
export default {
  name: "IntroView",
};
</script>

<script setup>
import { onMounted } from "vue";
import { useStore } from "vuex";

const store = useStore();

onMounted(() => {
  store.dispatch("article/LOAD_ARTICLES");
});
</script>

<style></style>
