<template>
  <sw-hw-list v-if="state == 'list'" @edit="edit"></sw-hw-list>
  <sw-hw-edit v-if="state == 'edit'"></sw-hw-edit>
</template>

<script>
export default {
  name: "SwHwView",
};
</script>

<script setup>
import { ref } from "vue";

import SwHwList from "./SwHwList.vue";
import SwHwEdit from "./SwHwEdit.vue";

let state = ref("list");

function edit(item) {
  state.value = "edit";
}
</script>

<style></style>
