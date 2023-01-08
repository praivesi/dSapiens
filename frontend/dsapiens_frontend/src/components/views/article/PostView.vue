<template>
  <div class="d-flex justify-space-between align-center">
    <h1 class="ds-60wp">
      <p class="pl-5 pr-5 pt-1 pb-1 ds-100wp">
        {{ targetItem.title }}
      </p>
    </h1>
    <div>
      <v-btn @click="$emit('edit', targetItem)">
        <v-icon>mdi-playlist-edit</v-icon>
      </v-btn>
      <v-btn class="ml-5" @click="$emit('list')"
        ><v-icon>mdi-format-list-bulleted</v-icon></v-btn
      >
    </div>
  </div>
  <div class="ds-2hv"></div>
  <div class="ds-80hv">
    <!-- <p>{{ targetItem.content }}</p> -->
    <QuillEditor ref="quill" theme="bubble" class="ds-70hv" />
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, defineProps } from "vue";

import { QuillEditor, Quill } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";

let props = defineProps({
  item: {
    Type: Object,
    default: {
      id: -1,
      author: "Default Author",
      title: "Default Title",
      content: "Default Content",
    },
  },
});

let targetItem = reactive({
  id: -1,
  author: "Default Author",
  title: "Default Title",
  content: "Default Content",
});

const quill = ref(null);

onMounted(() => {
  targetItem.id = props.item.id;
  targetItem.author = props.item.author;
  targetItem.title = props.item.title;
  targetItem.content = props.item.content;

  quill.value.setText(targetItem.content);
});
</script>

<style></style>
