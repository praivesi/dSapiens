<template>
  <div class="d-flex ds-100wp justify-space-between">
    <div
      class="tab-btn"
      :class="curGnb == 'introduction' ? 'hightlighted' : ''"
      @click="clickGnb('introduction')"
    >
      Introduction
    </div>
    <div
      class="tab-btn"
      :class="curGnb == 'swHw' ? 'hightlighted' : ''"
      @click="clickGnb('swHw')"
    >
      Software / Hardware
    </div>
    <div
      class="tab-btn"
      :class="curGnb == 'advancedCS' ? 'hightlighted' : ''"
      @click="clickGnb('advancedCS')"
    >
      Advanced CS
    </div>
    <div
      class="tab-btn"
      :class="curGnb == 'science' ? 'hightlighted' : ''"
      @click="clickGnb('science')"
    >
      Science
    </div>
    <div
      class="tab-btn"
      :class="curGnb == 'economics' ? 'hightlighted' : ''"
      @click="clickGnb('economics')"
    >
      Economics
    </div>
    <div
      class="tab-btn"
      :class="curGnb == 'philosophy' ? 'hightlighted' : ''"
      @click="clickGnb('philosophy')"
    >
      Philosophy
    </div>
    <div
      class="tab-btn"
      :class="curGnb == 'life' ? 'hightlighted' : ''"
      @click="clickGnb('life')"
    >
      Life
    </div>
    <div
      class="tab-btn"
      :class="curGnb == 'pulse' ? 'ds-grey' : ''"
      @click="clickGnb('pulse')"
    >
      Pulse
    </div>
    <div
      class="tab-btn"
      :class="curGnb == 'setting' ? 'ds-grey' : ''"
      @click="clickGnb('setting')"
    >
      Setting
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const emits = defineEmits(["gnb"]);

let curGnb = ref("introduction");

function clickGnb(newGnb) {
  curGnb.value = newGnb;

  emits("gnb", newGnb);
}
</script>

<style scoped lang="scss">
.tab-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  font-weight: bold;
  background-color: $secondary-color;
  color: white;
}

.hightlighted {
  background-color: $primary-color;
}
</style>
