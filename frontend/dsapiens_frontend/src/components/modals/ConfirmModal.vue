<template>
  <v-dialog v-model="isOpen" width="500">
    <v-card class="ds-200hx">
      <v-card-title class="modal-title grey lighten-2">
        {{ title }}
      </v-card-title>

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

let isOpen = computed(() => store.getters["confirmModal/IS_OPEN"]);
let title = computed(() => store.getters["confirmModal/TITLE"]);
let description = computed(() => store.getters["confirmModal/MESSAGE"]);

function confirm() {
  store.commit("confirmModal/CLOSE", true);
}

function cancel() {
  store.commit("confirmModal/CLOSE", false);
}
</script>

<style lang="scss" scoped>
.modal-title {
  color: white;
  background-color: $primary-color;
  font-weight: bold;
}
</style>
