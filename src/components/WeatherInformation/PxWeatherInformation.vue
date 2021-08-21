<template>
  <div class="weather__information">
    <div class="weather__information-temperature">
      <p class="weather__information-temperature-number">
        {{
          store.locationSucces !== false ? store.dataWeather.temperature : "--"
        }}
      </p>
      <div class="weather__information-temperature-type">
        <span>°</span> <span>C</span>
      </div>
    </div>
    <p class="weather__information-type">
      {{
        store.locationSucces !== false
          ? store.dataWeather.temperatureDescription
          : "--"
      }}
    </p>
    <div class="weather__information-date">
      <p>Today</p>
      <span>•</span>
      <p>
        {{ store.date }}
      </p>
    </div>
    <p class="weather__information-ubication">
      <font-awesome-icon icon="map-marker-alt" />
      {{
        store.locationSucces !== false ? store.dataWeather.locationName : "--"
      }}
    </p>
  </div>
</template>

<script>
import { inject } from "vue";
//Icons
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faMapMarkerAlt);

export default {
  name: "PxWeatherInformation",
  components: {
    FontAwesomeIcon,
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
@import "~@/assets/sass/components/_PxWeatherInformation.scss";
</style>
