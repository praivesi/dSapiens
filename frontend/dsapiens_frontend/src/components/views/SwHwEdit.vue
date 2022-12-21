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
      <v-btn @click="targetId == -1 ? add() : update()">
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
  id: {
    Type: Number,
    default: -1,
  },
  author: {
    Type: String,
    default: "Default Author",
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
const emits = defineEmits(["close"]);

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

async function add() {
  store.commit("confirmModal/OPEN", {
    title: "추가",
    message: "새 글을 등록하시겠습니까?",
    confirmedJob: () => {
      store.dispatch("article/ADD_ARTICLE", {
        author: targetAuthor.value,
        title: targetTitle.value,
        content: quill.value.getText(),
      });

      emits("close");
    },
  });
}

async function update() {
  store.commit("confirmModal/OPEN", {
    title: "수정",
    message: "글을 업데이트하겠습니까?",
    confirmedJob: () => {
      store.dispatch("article/UPDATE_ARTICLE", {
        author: targetAuthor.value,
        id: targetId.value,
        title: targetTitle.value,
        content: quill.value.getText(),
      });

      emits("close");
    },
  });
}
</script>

<style></style>
