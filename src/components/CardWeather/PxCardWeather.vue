<template>
  <div class="card__weather">
    <p class="card__weather-day">
      {{ dayName }}
    </p>
    <img
      class="card__weather-image"
      :src="'assets/img/' + imageWeather + '.png'"
      alt="Image weather"
    />
    <section class="card__weather-temperature">
      <p class="card__weather-active">{{ maxTemperature }}°C</p>
      <p class="card__weather-unactive">{{ minTemperature }}°C</p>
    </section>
  </div>
</template>

<script>
export default {
  name: "PxCardWeather",
  props: {
    dayName: String,
    imageWeather: String,
    minTemperature: Number,
    maxTemperature: Number,
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/sass/components/_PxCardWeather.scss";
</style>
