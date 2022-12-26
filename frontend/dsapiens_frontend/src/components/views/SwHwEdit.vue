<template>
  <div class="d-flex justify-space-between">
    <h1>
      <input v-model="targetTitle" />
    </h1>
    <div>
      <v-btn @click="submit()">Submit</v-btn>
      <v-btn class="ml-5" @click="$emit('close')">Back</v-btn>
    </div>
  </div>
  <div :style="{ height: 2 + 'vh' }"></div>
  <QuillEditor
    ref="quill"
    v-model="targetContent"
    theme="snow"
    :style="{ height: 70 + 'vh' }"
  />
</template>

<script setup>
import { ref, onMounted, defineProps } from "vue";
import { useStore } from "vuex";

import { QuillEditor, Quill } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";

let props = defineProps({
  id: {
    Type: Number,
    default: -1,
  },
  title: {
    Type: String,
    default: "Default Title",
  },
  content: {
    Type: String,
    default: "Default Content",
  },
});

const store = useStore();

let targetId = ref(-1);
let targetTitle = ref("");
let targetContent = ref("");

const quill = ref(null);

onMounted(() => {
  targetId.value = props.id;
  targetTitle.value = props.title;
  targetContent.value = props.content;
  //   quill.value.setText(targetContent.value);
  //   quill.value.setText(props.content);
});

async function submit() {
  if (targetId.value == -1) {
    // ADD
    // store.dispatch("ADD_ARTICLE", targetTitle.value, quill.value.getText());

    // store.dispatch("ADD_ARTICLE", targetTitle.value, targetContent.value);
    store.dispatch("ADD_ARTICLE", "abc", "abcd");
  } else {
    // UPDATE
    store.dispatch(
      "UPDATE_ARTICLE",
      targetId.value,
      targetTitle.value,
      quill.value.getText()
    );
  }
}
</script>

<style></style>
