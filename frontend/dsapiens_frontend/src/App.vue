<template>
    <div>
        <banner />
        <NavBar  />
    </div>
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
