<template>
  <div class="d-flex ds-100wp justify-space-between">
    <div class="tab-btn" @click="tab = 'introduction'">Introduction</div>
    <div class="tab-btn" @click="tab = 'swHw'">Software / Hardware</div>
    <div class="tab-btn" @click="tab = 'advancedCS'">Advanced CS</div>
    <div class="tab-btn" @click="tab = 'science'">Science</div>
    <div class="tab-btn" @click="tab = 'economics'">Economics</div>
    <div class="tab-btn" @click="tab = 'philosophy'">Philosophy</div>
    <div class="tab-btn" @click="tab = 'life'">Life</div>
    <div class="tab-btn" @click="tab = 'pulse'">Pulse</div>
    <div class="tab-btn" @click="tab = 'setting'">Setting</div>
  </div>
  <div class="ma-3">
    <intro v-if="tab == 'introduction'"></intro>
    <sw-hw v-if="tab == 'swHw'"></sw-hw>
    <AdvancedCS v-if="tab == 'advancedCS'"></AdvancedCS>
    <science v-if="tab == 'science'"></science>
    <economics v-if="tab == 'economics'"></economics>
    <philosophy v-if="tab == 'philosophy'"></philosophy>
    <life v-if="tab == 'life'"></life>
    <pulse v-if="tab == 'pulse'"></pulse>
    <setting v-if="tab == 'setting'"></setting>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Intro from "../views/Intro.vue";
import SwHw from "../views/SwHw.vue";
import Science from "../views/Science.vue";
import AdvancedCS from "../views/AdvancedCS.vue";
import Economics from "../views/Economics.vue";
import Philosophy from "../views/Philosophy.vue";
import Life from "../views/Life.vue";
import Pulse from "../views/Pulse.vue";
import Setting from "../views/Setting.vue";

let tab = ref("introduction");
</script>

<style lang="scss">
.navbar {
  color: white;
  background-color: $primary-color;
}

.tab-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  font-weight: bold;
  background-color: $primary-color;
  color: white;
}
</style>
