<template>
  <div class="d-flex justify-space-between align-center">
    <h2 class="ds-80wp">
      <input
        class="edit-title pl-5 pr-5 pt-1 pb-1 ds-100wp"
        v-model="targetItem.title"
      />
    </h2>
    <div>
      <v-btn @click="targetItem.id == -1 ? add() : update()">
        <v-icon>mdi-check-bold</v-icon>
      </v-btn>
      <v-btn class="ml-5" @click="$emit('post', targetItem)">
        <v-icon>mdi-content-paste</v-icon>
      </v-btn>
      <v-btn class="ml-5" @click="$emit('list')"
        ><v-icon>mdi-format-list-bulleted</v-icon></v-btn
      >
    </div>
  </div>
  <div class="ds-2hv"></div>
  <QuillEditor ref="quill" theme="snow" class="ds-70hv" />
</template>

<script setup>
import { ref, reactive, onMounted, defineProps } from "vue";
import { useStore } from "vuex";

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

const store = useStore();
const emits = defineEmits(["post"]);

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

  if (targetItem.author == "") {
    targetItem.author = "Default Author";
  }

  if (targetItem.title == "") {
    targetItem.title = "Default Title";
  }

  if (targetItem.content == "") {
    targetItem.content = "Default Content";
  }

  quill.value.setText(targetItem.content);
});

async function add() {
  store.commit("confirmModal/OPEN", {
    title: "추가",
    message: "새 글을 등록하시겠습니까?",
    confirmedJob: () => {
      store.dispatch("article/ADD_ARTICLE", {
        author: targetItem.author,
        title: targetItem.title,
        content: quill.value.getText(),
        routineAfterSucceed: (data) => {
          emits("post", data);
        },
      });
    },
  });
}

async function update() {
  store.commit("confirmModal/OPEN", {
    title: "수정",
    message: "글을 업데이트하겠습니까?",
    confirmedJob: () => {
      store.dispatch("article/UPDATE_ARTICLE", {
        id: targetItem.id,
        author: targetItem.author,
        title: targetItem.title,
        content: quill.value.getText(),
        routineAfterSucceed: (data) => {
          emits("post", data);
        },
      });
    },
  });
}
</script>

<style scoped>
.edit-title {
  border: 1px solid grey;
  border-radius: 5px;
}
</style>
