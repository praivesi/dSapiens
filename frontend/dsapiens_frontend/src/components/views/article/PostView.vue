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
    <QuillEditor ref="quill" theme="bubble" class="ds-70hv" />
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, defineProps } from "vue";
import { ArticleModel } from "@/components/models/article-model.js";

import { QuillEditor, Quill } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";

let props = defineProps({
  item: {
    Type: ArticleModel,
    default: new ArticleModel(),
  },
});

let targetItem = reactive(new ArticleModel());

const quill = ref(null);

onMounted(() => {
  targetItem.copy(props.item);

  quill.value.setHTML(targetItem.content);
});
</script>

<style scoped lang="scss">
// [230123 hsoh] If ".use-scss" style doesn't exist, using scss faield.
.use-scss {
  background-color: $primary-color;
}
</style>
