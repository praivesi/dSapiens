<template>
  <div class="banner d-flex justify-center align-center text-h4">
    <img class="banner-img" src="@/assets/universe.jpeg" alt="universe2" />
    <h3 class="banner-txt centered">Dedicated Sapiens' Space</h3>
  </div>
</template>

<style lang="scss">
.banner {
  position: relative;
  width: 100%;
  height: 200px;
  color: white;
  text-align: center;
}

.banner-img {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.banner-txt {
  width: 100%;
  letter-spacing: 0.5em;
}

.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
