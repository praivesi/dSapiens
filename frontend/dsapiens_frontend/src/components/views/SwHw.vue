<template>
  <div class="ds-100hp">
    <list-view
      v-if="state == 'list'"
      class="ds-100hp"
      title="Software / Hardware posts"
      @add="add"
      @edit="edit"
      @post="post"
    ></list-view>
    <post-view
      v-if="state == 'post'"
      :item="item"
      @edit="edit"
      @list="list"
    ></post-view>
    <edit-view
      v-if="state == 'edit'"
      :item="item"
      @post="post"
      @list="list"
    ></edit-view>
  </div>
</template>

<script>
export default {
  name: "SwHwView",
};
</script>

<script setup>
import { ref } from "vue";
import { ArticleModel } from "@/components/models/article-model.js";

import ListView from "./article/ListView.vue";
import EditView from "./article/EditView.vue";
import PostView from "./article/PostView.vue";

let state = ref("list");
let item = ref(null);

function add() {
  item.value = new ArticleModel();
  item.value.genre = 1;

  state.value = "edit";
}

function edit(edit_item) {
  item.value = edit_item;

  state.value = "edit";
}

function post(post_item) {
  item.value = post_item;

  state.value = "post";
}

function list() {
  state.value = "list";

  item.value = new ArticleModel();
  item.value.genre = 1;
}
</script>

<style></style>
