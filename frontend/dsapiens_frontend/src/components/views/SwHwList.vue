<template>
  <div class="d-flex justify-space-between ma-5">
    <h1>Software / Hardward posts</h1>
    <v-btn @click="$emit('add')"><v-icon>mdi-plus</v-icon></v-btn>
  </div>
  <v-card max-width="100%" class="mx-auto">
    <v-list-item-group v-model="items">
      <v-list-item v-for="(item, i) in items" :key="i">
        <div
          class="d-flex align-center pl-2 pr-2"
          :style="{ height: 50 + 'px' }"
        >
          <v-list-item-content :style="{ width: 100 + '%' }">
            <div :style="{ width: 100 + '%' }">
              <v-list-item-title v-html="item.title"></v-list-item-title>
              <v-list-item-subtitle
                v-html="item.subtitle"
              ></v-list-item-subtitle>
            </div>
          </v-list-item-content>
          <div :style="{ width: 100 + '%' }"></div>
          <v-btn @click="$emit('edit', item)"
            ><v-icon>mdi-playlist-edit</v-icon></v-btn
          >
          <v-btn class="ml-5" @click="remove(item)"
            ><v-icon>mdi-close</v-icon></v-btn
          >
        </div>
        <v-divider></v-divider>
      </v-list-item>
    </v-list-item-group>
  </v-card>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useStore } from "vuex";

let items = ref("");
const store = useStore();

onMounted(() => {
  items.value = store.getters["GET_ARTICLES"];
});

function remove(item) {
  store.dispatch("REMOVE_ARTICLE", item.id);
}
</script>

<script>
export default {
  name: "SwHwListView",
};
</script>

<style></style>
