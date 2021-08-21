<template>
  <div class="weather__image-type">
    <img :src="'assets/img/' + urlImage + '.png'" alt="Image Weather" />
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
    margin: 16px auto 0;
    display: block;
    max-width: 150px;
    @media screen and (min-width: 1200px) {
      margin: 46px auto 0;
    }
  }
}
</style>
