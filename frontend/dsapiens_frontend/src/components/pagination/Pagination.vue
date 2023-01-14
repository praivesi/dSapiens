<template>
  <div class="ds-pagination d-flex justify-center">
    <v-btn class="ds-lightgrey"><v-icon>mdi-chevron-double-left</v-icon></v-btn>
    <v-btn class="ds-lightgrey"><v-icon>mdi-chevron-left</v-icon></v-btn>
    <div v-for="page in pages" :key="page">
      <v-btn
        :class="page == cur_page ? 'ds-grey' : 'ds-lightgrey'"
        @click="pageClick(page)"
        >{{ page }}</v-btn
      >
    </div>
    <v-btn class="ds-lightgrey"><v-icon>mdi-chevron-right</v-icon></v-btn>
    <v-btn class="ds-lightgrey"
      ><v-icon>mdi-chevron-double-right</v-icon></v-btn
    >
  </div>
</template>

<script>
export default { name: "PaginationComp" };
</script>

<script setup>
import { ref, onMounted } from "vue";

let pages = ref([]);
let cur_page = ref(1);

onMounted(() => {
  for (var i = 0; i < 5; i++) {
    pages.value.push(i + 1);
  }
});

function pageClick(page) {
  cur_page.value = page;
}
</script>

<style></style>
