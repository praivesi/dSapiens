<template>
  <div class="d-flex justify-space-between align-center">
    <h2 :style="{ width: 90 + '%' }">
      <input
        class="pl-5 pr-5 pt-1 pb-1"
        v-model="targetTitle"
        :style="{
          width: 100 + '%',
          border: '1px solid grey',
          'border-radius': 5 + 'px',
        }"
      />
    </h2>
    <div>
      <v-btn @click="submit()">
        <v-icon>mdi-check-bold</v-icon>
      </v-btn>
      <v-btn class="ml-5" @click="$emit('close')"
        ><v-icon>mdi-arrow-left-bold</v-icon></v-btn
      >
    </div>
  </div>
  <div :style="{ height: 2 + 'vh' }"></div>
  <QuillEditor ref="quill" theme="snow" :style="{ height: 70 + 'vh' }" />
</template>

<script setup>
import { ref, onMounted, defineProps } from "vue";
import { useStore } from "vuex";

import { QuillEditor, Quill } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";

let props = defineProps({
  author: {
    Type: String,
    default: "testAcc",
  },
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

const emits = defineEmits(["close"]);

const store = useStore();

let targetId = ref(-1);
let targetAuthor = ref("");
let targetTitle = ref("");

const quill = ref(null);

onMounted(() => {
  targetId.value = props.id;
  targetAuthor.value = props.author;
  targetTitle.value = props.title;
  quill.value.setText(props.content);
});

async function submit() {
  if (targetId.value == -1) {
    // ADD
    store.dispatch("article/ADD_ARTICLE", {
      author: targetAuthor.value,
      title: targetTitle.value,
      content: quill.value.getText(),
    });
  } else {
    // UPDATE
    store.dispatch("article/UPDATE_ARTICLE", {
      author: targetAuthor.value,
      id: targetId.value,
      title: targetTitle.value,
      content: quill.value.getText(),
    });
  }

  emits("close");
}
</script>

<style></style>
