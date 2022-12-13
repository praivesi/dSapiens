<template>
  <!-- Software, Hardware, Computer Science ... -->
  <!-- <QuillEditor theme="snow" :style="{ height: 70 + 'vh' }" /> -->
  <sw-hw-list></sw-hw-list>
</template>

<script>
// import { QuillEditor } from "@vueup/vue-quill";
// import "@vueup/vue-quill/dist/vue-quill.snow.css";
import SwHwList from "./SwHwList.vue";

export default {
  name: "SwHwView",
  components: {
    SwHwList,
  },
  //   components: {
  //     QuillEditor,
  //   },
};
</script>

<style></style>
