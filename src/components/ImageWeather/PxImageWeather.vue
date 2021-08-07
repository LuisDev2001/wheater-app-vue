<template>
  <div class="weather__image-type">
    <img src="@/assets/img/Shower.png" alt="Image Weather" />
  </div>
</template>

<script>
export default {
  name: "PxImageWeather",
  props: {
    urlImage: String,
  },
};
</script>

<style lang="scss" scoped>
.weather__image-type {
  img {
    margin: 76px auto 0;
    display: block;
    max-width: 150px;
  }
}
</style>
