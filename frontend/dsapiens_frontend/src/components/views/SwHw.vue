<template>
  <sw-hw-list v-if="state == 'list'" @edit="edit" @add="add"></sw-hw-list>
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
import { ref, onMounted } from "vue";

import SwHwList from "./SwHwList.vue";
import SwHwEdit from "./SwHwEdit.vue";
import axios from "redaxios";

let state = ref("list");
let item = ref(null);

onMounted(() => {
  axiosTest();
});

// axios Test
function axiosTest() {
  axios
    .get("http://localhost:8000/api/articles/")
    .then((response) => {
      console.log("response => " + JSON.stringify(response));
      console.log("response.data => " + JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log("error => " + error);
    });
}

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

function close_edit() {
  state.value = "list";
  item.value = {
    title: "",
    content: "",
  };
}
</script>

<style></style>
