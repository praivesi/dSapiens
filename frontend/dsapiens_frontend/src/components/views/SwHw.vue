<template>
  <sw-hw-list v-if="state == 'list'" @edit="edit" @add="add"></sw-hw-list>
  <sw-hw-edit
    v-if="state == 'edit'"
    :title="item.title"
    :content="item.content"
    @close="closeEdit"
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

function add() {
  state.value = "edit";
  item.value = {
    title: "",
    content: "",
  };
}

function edit(edit_item) {
  state.value = "edit";
  item.value = edit_item;
}

function closeEdit() {
  state.value = "list";
  item.value = {
    title: "",
    content: "",
  };
}
</script>

<style></style>
