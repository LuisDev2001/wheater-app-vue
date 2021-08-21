<template>
  <section class="weather-days-container grid">
    <slot v-if="!store.locationSucces">
      <div class="loader">
        <img src="@/assets/img/loader.svg" alt="Loader" />
      </div>
    </slot>
    <slot v-else>
      <PxCardWeather
        v-for="(day, index) in store.forecastFiveDays"
        :key="index"
        :dayName="day.day"
        :imageWeather="day.imgUrl"
        :maxTemperature="Number((day.maxTemp - 273.15).toFixed(0))"
        :minTemperature="Number((day.minTemp - 273.15).toFixed(0))"
      />
    </slot>
  </section>
</template>

<script>
import { inject } from "vue";
import PxCardWeather from "../CardWeather/PxCardWeather";

export default {
  name: "PxDaysInformationWeather",
  components: {
    PxCardWeather,
  },
  setup() {
    const store = inject("storeWeatherApp");

    return {
      store,
    };
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
