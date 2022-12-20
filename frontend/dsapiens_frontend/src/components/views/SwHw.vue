<template>
  <sw-hw-list v-if="state == 'list'" @edit="edit"></sw-hw-list>
  <sw-hw-edit
    v-if="state == 'edit'"
    :title="item.title"
    :content="item.content"
    @close="close_edit"
  ></sw-hw-edit>
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
let item = ref(null);

function edit(edit_item) {
  state.value = "edit";
  item.value = edit_item;
}

function close_edit() {
  state.value = "list";
  item.value = null;
}
</script>

<style></style>
