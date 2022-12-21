<template>
  <list-view
    v-if="state == 'list'"
    @add="add"
    @edit="edit"
    @post="post"
  ></list-view>
  <post-view
    v-if="state == 'post'"
    :item="item"
    @edit="edit"
    @list="backToList"
  ></post-view>
  <edit-view
    v-if="state == 'edit'"
    :item="item"
    @post="post"
    @list="backToList"
  ></edit-view>
</template>

<script>
export default {
  name: "SwHwView",
};
</script>

<script setup>
import { ref } from "vue";

import ListView from "./article/ListView.vue";
import EditView from "./article/EditView.vue";
import PostView from "./article/PostView.vue";

let state = ref("list");
let item = ref(null);

function add() {
  item.value = {
    id: -1,
    title: "",
    content: "",
  };

  state.value = "edit";
}

function edit(edit_item) {
  item.value = edit_item;

  state.value = "edit";
}

function post(post_item) {
  console.log("post() before item.value => " + JSON.stringify(item.value));

  item.value = post_item;

  console.log("post() after item.value => " + JSON.stringify(item.value));
  console.log("post() post_item => " + JSON.stringify(post_item));

  state.value = "post";
}

function backToList() {
  state.value = "list";
  item.value = {
    id: "",
    author: "",
    title: "",
    content: "",
  };
}
</script>

<style></style>
