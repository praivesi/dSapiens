<template>
  <!-- <v-app>
    <v-main> -->
        <div>
        <banner />
        <NavBar  />
        <!-- <router-view></router-view> -->
        </div>
    <!-- </v-main>
  </v-app> -->
</template>

<script>
export default {
  name: 'App',
}
</script>

<script setup>
import Banner from './components/common/Banner.vue'
import NavBar from './components/common/NavBar.vue'
</script>
