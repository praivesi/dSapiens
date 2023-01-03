<template>
  <!-- <nav id="nav">
      <div class="menu-item"><router-link to="/">Introduction</router-link></div>
      <div class="menu-item"><router-link to="/swHw">Software / Hardware</router-link></div>
      <div class="menu-item"><router-link to="/advancedCS">Advanced CS</router-link></div>
      <div class="menu-item"><router-link to="/science">Science</router-link></div>
      <div class="menu-item"><router-link to="/economics">Economics</router-link></div>
      <div class="menu-item"><router-link to="/philosophy">Philosophy</router-link></div>
      <div class="menu-item"><router-link to="/life">Life</router-link></div>
      <div class="menu-item"><router-link to="/">Setting</router-link></div>
  </nav> -->
  <!-- bg-color='rgb(50, 100, 185)' -->
  <v-tabs v-model="tab" class="navbar" fixed-tabs>
    <v-tab value="introduction">Introduction</v-tab>
    <v-tab value="swHw">Software / Hardware</v-tab>
    <v-tab value="advancedCS">Advanced CS</v-tab>
    <v-tab value="science">Science</v-tab>
    <v-tab value="economics">Economics</v-tab>
    <v-tab value="philosophy">Philosophy</v-tab>
    <v-tab value="life">Life</v-tab>
    <v-tab value="pulse">Pulse</v-tab>
    <v-tab value="setting">Setting</v-tab>
  </v-tabs>

  <v-card-text>
    <v-window v-model="tab">
      <v-window-item value="introduction">
        <intro />
      </v-window-item>
      <v-window-item value="swHw">
        <sw-hw></sw-hw>
      </v-window-item>
      <v-window-item value="advancedCS">
        <AdvancedCS></AdvancedCS>
      </v-window-item>
      <v-window-item value="science">
        <science></science>
      </v-window-item>
      <v-window-item value="economics">
        <economics></economics>
      </v-window-item>
      <v-window-item value="philosophy">
        <philosophy></philosophy>
      </v-window-item>
      <v-window-item value="life">
        <life></life>
      </v-window-item>
      <v-window-item value="pulse">
        <pulse></pulse>
      </v-window-item>
      <v-window-item value="setting">
        <setting></setting>
      </v-window-item>
    </v-window>
  </v-card-text>
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

let tab = ref("");
</script>

<style lang="scss">
.navbar {
  color: white;
  background-color: $primary-color;
}
</style>
