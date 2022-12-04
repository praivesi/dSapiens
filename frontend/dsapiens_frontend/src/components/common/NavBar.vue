<template>
  <nav id="nav">
      <div class="menu-item"><router-link to="/">Introduction</router-link></div>
      <div class="menu-item"><router-link to="/swHw">Software / Hardware</router-link></div>
      <div class="menu-item"><router-link to="/advancedCS">Advanced CS</router-link></div>
      <div class="menu-item"><router-link to="/science">Science</router-link></div>
      <div class="menu-item"><router-link to="/economics">Economics</router-link></div>
      <div class="menu-item"><router-link to="/philosophy">Philosophy</router-link></div>
      <div class="menu-item"><router-link to="/life">Life</router-link></div>
      <div class="menu-item"><router-link to="/">Setting</router-link></div>
  </nav>
</template>

<script>
export default {
    name: 'navBar'
}
</script>

<style>

</style>