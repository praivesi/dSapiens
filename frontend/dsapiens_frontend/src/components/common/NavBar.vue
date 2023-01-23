<template>
  <div class="d-flex ds-100wp justify-space-between">
    <div class="tab-btn" @click="$emit('gnb', 'introduction')">
      Introduction
    </div>
    <div class="tab-btn" @click="$emit('gnb', 'swHw')">Software / Hardware</div>
    <div class="tab-btn" @click="$emit('gnb', 'advancedCS')">Advanced CS</div>
    <div class="tab-btn" @click="$emit('gnb', 'science')">Science</div>
    <div class="tab-btn" @click="$emit('gnb', 'economics')">Economics</div>
    <div class="tab-btn" @click="$emit('gnb', 'philosophy')">Philosophy</div>
    <div class="tab-btn" @click="$emit('gnb', 'life')">Life</div>
    <div class="tab-btn" @click="$emit('gnb', 'pulse')">Pulse</div>
    <div class="tab-btn" @click="$emit('gnb', 'setting')">Setting</div>
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
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
