<template>
  <div class="d-flex justify-space-between">
    <h1>{{ title }}</h1>
    <v-btn @click="$emit('close')">Back</v-btn>
  </div>
  <div :style="{ height: 2 + 'vh' }"></div>
  <QuillEditor ref="quill" theme="snow" :style="{ height: 70 + 'vh' }" />
</template>

<script setup>
import { ref, onMounted, defineProps } from "vue";
import { QuillEditor, Quill } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";

let props = defineProps({
  title: {
    Type: String,
    default: "Default Title",
  },
  content: {
    Type: String,
    default: "Default Content",
  },
});

const quill = ref(null);

onMounted(() => {
  quill.value.setText(props.content);
});
</script>

<style></style>
