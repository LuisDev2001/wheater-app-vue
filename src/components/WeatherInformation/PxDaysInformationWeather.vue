<template>
  <section class="weather-days-container grid">
    <!-- <PxCardWeather
      v-for="(day, index) in store.forecastFiveDays"
      :key="index"
      :dayName="day.dt_txt"
      :maxTemperature="Number((day.main.temp_max - 273.15).toFixed(0))"
      :minTemperature="Number((day.main.temp_min - 273.15).toFixed(0))"
    /> -->
  </section>
</template>

<script>
import { inject, onMounted } from "vue";
import PxCardWeather from "../CardWeather/PxCardWeather";
//Utils
import { getData } from "@/utils/getData";

export default {
  name: "PxDaysInformationWeather",
  components: {
    PxCardWeather,
  },
  setup() {
    const store = inject("storeWeatherApp");

    onMounted(async () => {
      console.log(store.value.lattitude);
      await getForecastFiveDays();
    });

    const getForecastFiveDays = async () => {
      const LAT_AND_LONG = `lat=${store.value.lattitude}&lon=${store.value.longitude}`;
      console.log(LAT_AND_LONG);
      const API_KEY = store.value.apiKey;
      const data = await getData(
        `${store.value.BASE_URL}/forecast?${LAT_AND_LONG}&appid=${API_KEY}`
      );

      for (let index = 0; index < data.list.length; index++) {
        // console.log(index);
        // console.log(data.list[index]);
      }
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
