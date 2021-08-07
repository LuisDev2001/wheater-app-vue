<template>
  <div class="card__weather">
    <p class="card__weather-day">
      Tomorrow
    </p>
    <img
      class="card__weather-image"
      src="@/assets/img/HeavyCloud.png"
      alt="Image weather"
    />
    <section class="card__weather-temperature">
      <p class="card__weather-active">16°C</p>
      <p class="card__weather-unactive">11°C</p>
    </section>
  </div>
</template>

<script>
export default {
  name: "PxCardWeather",
};
</script>

<style lang="scss" scoped>
@import "~@/assets/sass/components/_PxCardWeather.scss";
</style>
