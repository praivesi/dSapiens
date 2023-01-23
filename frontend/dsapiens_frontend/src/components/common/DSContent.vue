<template>
  <div class="ma-3">
    <intro v-if="props.gnb == 'introduction'"></intro>
    <sw-hw v-if="props.gnb == 'swHw'"></sw-hw>
    <AdvancedCS v-if="props.gnb == 'advancedCS'"></AdvancedCS>
    <science v-if="props.gnb == 'science'"></science>
    <economics v-if="props.gnb == 'economics'"></economics>
    <philosophy v-if="props.gnb == 'philosophy'"></philosophy>
    <life v-if="props.gnb == 'life'"></life>
    <pulse v-if="props.gnb == 'pulse'"></pulse>
    <setting v-if="props.gnb == 'setting'"></setting>
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

let props = defineProps({
  gnb: {
    type: String,
    default: "introduction",
  },
});
</script>

<style lang="scss"></style>
