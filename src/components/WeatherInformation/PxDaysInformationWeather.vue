<template>
  <section class="weather-days-container grid">
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

<style lang="scss" scoped>
.weather-days-container {
  padding: 52px 3.375rem;
  grid-template-columns: 1fr;
  gap: 32px 16px;

  @media screen and (min-width: 420px) {
    &.grid {
      gap: 32px 26px;
      grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    }
  }

  @media screen and (min-width: 1440px) {
    &.grid {
      padding: 3.25rem 7.6875rem 3.25rem 9.625rem;
    }
  }
}
</style>
