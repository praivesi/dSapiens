<template>
  <div class="d-flex justify-space-between align-center">
    <h1 :style="{ width: 90 + '%' }">
      <p
        class="pl-5 pr-5 pt-1 pb-1"
        :style="{
          width: 100 + '%',
        }"
      >
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
  <div :style="{ height: 2 + 'vh' }"></div>
  <div :style="{ height: 70 + 'vh' }">
    <p>{{ targetItem.content }}</p>
  </div>
</template>

<script setup>
import { reactive, onMounted, defineProps } from "vue";
import { useStore } from "vuex";

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

let targetItem = reactive({
  id: -1,
  author: "Default Author",
  title: "Default Title",
  content: "Default Content",
});

onMounted(() => {
  //   targetItem = props.item;
  targetItem.id = props.item.id;
  targetItem.author = props.item.author;
  targetItem.title = props.item.title;
  targetItem.content = props.item.content;
});
</script>

<style></style>
