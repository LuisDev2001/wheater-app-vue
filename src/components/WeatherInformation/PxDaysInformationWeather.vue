<template>
  <section class="weather-days-container grid">
    <PxCardWeather />
    <PxCardWeather />
    <PxCardWeather />
    <PxCardWeather />
    <PxCardWeather />
    <PxCardWeather />
  </section>
</template>

<script>
import PxCardWeather from "../CardWeather/PxCardWeather";
export default {
  name: "PxDaysInformationWeather",
  components: {
    PxCardWeather,
  },
};
</script>

<style laang="scss" scoped>
.weather-days-container {
  padding: 52px 16px;
}
</style>
