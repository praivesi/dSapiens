<template>
  <div class="d-flex justify-space-between ma-5">
    <h1>Software / Hardward posts</h1>
    <v-btn @click="$emit('add')">Add</v-btn>
  </div>
  <v-card max-width="100%" class="mx-auto">
    <v-list-item-group v-model="items">
      <v-list-item v-for="(item, i) in items" :key="i">
        <div class="d-flex">
          <v-list-item-content :style="{ width: 100 + '%' }">
            <div :style="{ width: 100 + '%' }">
              <v-list-item-title v-html="item.title"></v-list-item-title>
              <v-list-item-subtitle
                v-html="item.subtitle"
              ></v-list-item-subtitle>
            </div>
          </v-list-item-content>
          <div :style="{ width: 100 + '%' }"></div>
          <v-btn @click="$emit('edit', item)">Edit</v-btn>
        </div>
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
</script>

<script>
export default {
  name: "SwHwListView",
  data: () => ({
    // items: [
    //   {
    //     avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
    //     title: "Brunch this weekend?",
    //     subtitle: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
    //     content: "Bruch Content~~~~~~~~~~~~~~~~~~~~~~~!!",
    //   },
    //   { divider: true, inset: true },
    // ],
  }),
};
</script>

<style></style>
