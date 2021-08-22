<template>
  <div class="search__location-result">
    <ul class="search__location-result-list">
      <slot v-if="store.citiesResult.length > 0">
        <PxItemLocation
          v-for="(city, index) in store.citiesResult"
          :key="index"
          :cityName="city.name"
          :cityNameCountry="city.country"
          :cityCode="city.geonameid"
        />
      </slot>
      <slot v-else>
        <li class="search__location-no-result">
          Escribe el nombre de una ciudad en el buscador
        </li>
      </slot>
    </ul>
  </div>
</template>

<script>
import PxItemLocation from "./PxItemLocation";
import { inject, watchEffect } from "@vue/runtime-core";

export default {
  name: "PxSearchResult",
  components: {
    PxItemLocation,
  },
  setup() {
    const store = inject("storeWeatherApp");

    watchEffect(() => {
      if (store.value.cityNameLocation === "") {
        store.value.citiesResult = [];
      }
    });

    return {
      store,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/sass/components/_PxSearchResult.scss";
</style>
