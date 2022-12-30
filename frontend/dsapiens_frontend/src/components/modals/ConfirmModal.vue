<template>
  <v-dialog v-model="isOpen" width="500">
    <v-card>
      <v-card-title class="text-h5 grey lighten-2"> {{ title }} </v-card-title>

      <v-card-text> {{ description }} </v-card-text>
      <div class="d-flex justify-end ma-3">
        <v-btn @click="confirm()"><v-icon>mdi-check-bold</v-icon></v-btn>
        <v-btn class="ml-5" @click="cancel()"><v-icon>mdi-close</v-icon></v-btn>
      </div>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { ref, computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

// let isOpen = ref(store.getters["confirmModal/IS_OPEN"]);
let isOpen = computed(() => store.getters["confirmModal/IS_OPEN"]);
let title = computed(() => store.getters["confirmModal/TITLE"]);
let description = computed(() => store.getters["confirmModal/MESSAGE"]);

// let title = ref(store.getters["confirmModal/TITLE"]);
// let description = ref(store.getters["confirmModal/MESSAGE"]);

function confirm() {
  isOpen.value = false;

  store.commit("confirmModal/CLOSE", true);
}

function cancel() {
  isOpen.value = false;

  store.commit("confirmModal/CLOSE", false);
}
</script>

<style></style>
