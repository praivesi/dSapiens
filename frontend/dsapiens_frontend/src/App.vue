<template>
  <!-- <v-app>
    <v-main> -->
        <div>
        <NavBar />
        <router-view></router-view>
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
import NavBar from './components/common/NavBar.vue'
</script>
