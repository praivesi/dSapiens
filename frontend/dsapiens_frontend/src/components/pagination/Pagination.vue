<template>
  <div class="ds-pagination d-flex justify-center">
    <v-btn class="ds-lightgrey" @click="frontClick()"
      ><v-icon>mdi-chevron-double-left</v-icon></v-btn
    >
    <v-btn class="ds-lightgrey" @click="prevClick()"
      ><v-icon>mdi-chevron-left</v-icon></v-btn
    >
    <div v-for="page in pages" :key="page">
      <v-btn
        :class="page == cur_page + 1 ? ' ds-grey' : ' ds-lightgrey'"
        @click="pageClick(page)"
        >{{ page }}</v-btn
      >
    </div>
    <v-btn class="ds-lightgrey" @click="nextClick()"
      ><v-icon>mdi-chevron-right</v-icon></v-btn
    >
    <v-btn class="ds-lightgrey" @click="tailClick()"
      ><v-icon>mdi-chevron-double-right</v-icon></v-btn
    >
  </div>
</template>

<script>
export default { name: "PaginationComp" };
</script>

<script setup>
import { ref, onMounted } from "vue";

const emits = defineEmits(["pageNum"]);

const props = defineProps({
  pageNum: {
    type: Number,
    default: 0,
  },
  minPage: {
    type: Number,
    default: 0,
  },
  maxPage: {
    type: Number,
    default: 0,
  },
});

const PAGE_CHUNK = 5;

let pages = ref([]);
let cur_page = ref(props.pageNum);

onMounted(() => {
  refreshPagelist(props.minPage);
});

function pageClick(page) {
  cur_page.value = page;
}

function prevClick() {
  if (cur_page.value == props.minPage) {
    return;
  }

  if (cur_page.value % PAGE_CHUNK == 0 && cur_page.value != props.minPage) {
    refreshPagelist(cur_page.value - 1);
  }

  cur_page.value -= 1;

  emits("pageNum", cur_page.value);
}

function nextClick() {
  if (cur_page.value == props.maxPage) {
    return;
  }

  if (cur_page.value % PAGE_CHUNK == 4 && cur_page.value != props.maxPage) {
    refreshPagelist(cur_page.value + 1);
  }

  cur_page.value += 1;

  emits("pageNum", cur_page.value);
}

function frontClick() {
  if (cur_page.value < props.minPage + PAGE_CHUNK) {
    cur_page.value = props.minPage;
  } else {
    cur_page.value -= PAGE_CHUNK;
  }

  refreshPagelist(cur_page.value);

  emits("pageNum", cur_page.value);
}

function tailClick() {
  if (cur_page.value > props.maxPage - PAGE_CHUNK) {
    cur_page.value = props.maxPage;
  } else {
    cur_page.value += PAGE_CHUNK;
  }

  refreshPagelist(cur_page.value);

  emits("pageNum", cur_page.value);
}

function refreshPagelist(pivotPage) {
  if (pivotPage < props.minPage || pivotPage > props.maxPage) {
    return;
  }

  let startPage = parseInt(pivotPage / PAGE_CHUNK) * PAGE_CHUNK;

  pages.value = [];

  for (var i = startPage; i < startPage + PAGE_CHUNK; i++) {
    if (i > props.maxPage) {
      break;
    }

    pages.value.push(i + 1);
  }
}
</script>

<style scoped lang="scss">
// [230123 hsoh] If ".use-scss" style doesn't exist, using scss faield.
.use-scss {
  background-color: $primary-color;
}
</style>
