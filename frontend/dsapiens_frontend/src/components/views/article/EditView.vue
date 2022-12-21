<template>
  <div class="d-flex justify-space-between align-center">
    <h2 :style="{ width: 90 + '%' }">
      <input
        class="pl-5 pr-5 pt-1 pb-1"
        v-model="targetItem.title"
        :style="{
          width: 100 + '%',
          border: '1px solid grey',
          'border-radius': 5 + 'px',
        }"
      />
    </h2>
    <div>
      <v-btn @click="targetItem.id == -1 ? add() : update()">
        <v-icon>mdi-check-bold</v-icon>
      </v-btn>
      <v-btn @click="$emit('post', targetItem)">
        <v-icon>mdi-content-paste</v-icon>
      </v-btn>
      <v-btn class="ml-5" @click="$emit('list')"
        ><v-icon>mdi-format-list-bulleted</v-icon></v-btn
      >
    </div>
  </div>
  <div :style="{ height: 2 + 'vh' }"></div>
  <QuillEditor ref="quill" theme="snow" :style="{ height: 70 + 'vh' }" />
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

  console.log("props.item => " + JSON.stringify(props.item));
  console.log("EditView targetItem => " + JSON.stringify(targetItem));

  quill.value.setText(targetItem.content);
});

async function add() {
  store.commit("confirmModal/OPEN", {
    title: "추가",
    message: "새 글을 등록하시겠습니까?",
    confirmedJob: () => {
      let added_article = store
        .dispatch("article/ADD_ARTICLE", {
          author: targetItem.author,
          title: targetItem.title,
          content: quill.value.getText(),
        })
        .then(() => {
          console.log("added_article => " + JSON.stringify(added_article));

          emits("post", added_article);
        });
    },
  });
}

// [221221 hsoh] Promise를 사용해서 axios 연산 후 emits()를 실행해야 하는 부분에서 막힘
// 계속 emits() 가 response 얻는 작업보다 먼저 실행되서 빈값을 PostView로 넘김
async function update() {
  store.commit("confirmModal/OPEN", {
    title: "수정",
    message: "글을 업데이트하겠습니까?",
    confirmedJob: async () => {
      let updated_article = await store.dispatch("article/UPDATE_ARTICLE", {
        id: targetItem.id,
        author: targetItem.author,
        title: targetItem.title,
        content: quill.value.getText(),
      });

      console.log("dummyyyyyy");
      console.log("updated_article => " + JSON.stringify(updated_article));
      emits("post", updated_article);
      console.log("emit post finished");
    },
  });
}
</script>

<style></style>
