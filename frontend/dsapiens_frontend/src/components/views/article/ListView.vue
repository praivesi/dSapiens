<template>
  <div class="d-flex justify-space-between pa-5">
    <h1>{{ title }}</h1>
    <v-btn @click="$emit('add')"><v-icon>mdi-plus</v-icon></v-btn>
  </div>
  <v-card max-width="100%">
    <v-list-item-group
      v-model="items"
      :style="{ overflow: 'auto', display: 'block', height: 53 + 'vh' }"
    >
      <v-list-item v-for="(item, i) in items" :key="i">
        <div class="ds-list-item-cont d-flex align-center pl-2 pr-2">
          <v-list-item-content class="ds-100wp" @click="$emit('post', item)">
            <div class="d-flex align-center" :style="{ height: 40 + 'px' }">
              <v-list-item-title v-html="item.title"></v-list-item-title>
              <v-list-item-subtitle
                v-html="item.subtitle"
              ></v-list-item-subtitle>
            </div>
          </v-list-item-content>
          <v-btn class="ma-2" @click="$emit('edit', item)"
            ><v-icon>mdi-playlist-edit</v-icon></v-btn
          >
          <v-btn class="ma-2" @click="remove(item)"
            ><v-icon>mdi-close</v-icon></v-btn
          >
        </div>
        <v-divider></v-divider>
      </v-list-item>
    </v-list-item-group>
  </v-card>
  <pagination-comp></pagination-comp>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useStore } from "vuex";
import PaginationComp from "@/components/pagination/Pagination.vue";

let props = defineProps({
  title: {
    type: String,
    default: "List Title",
  },
});

let items = ref("");
const store = useStore();

onMounted(() => {
  items.value = store.getters["article/GET_ARTICLES"];
});

function remove(item) {
  store.commit("confirmModal/OPEN", {
    title: "삭제",
    message: "글을 삭제하시겠습니까?",
    confirmedJob: () => {
      store.dispatch("article/REMOVE_ARTICLE", item.id);
    },
  });
}
</script>

<script>
export default {
  name: "SwHwListView",
};
</script>
<style scoped lang="scss">
// [230123 hsoh] If ".use-scss" style doesn't exist, using scss faield.
.use-scss {
  background-color: $primary-color;
}
</style>
