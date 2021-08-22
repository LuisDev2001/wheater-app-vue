<template>
  <div class="search__location-result">
    <ul class="search__location-result-list">
      <slot v-if="store.citiesResult.length > 0">
        <li
          class="search__location-result-item"
          v-for="(cityName, index) in store.citiesResult"
          :key="index"
        >
          {{ cityName.name }}, {{ cityName.country }}
          <font-awesome-icon icon="chevron-right" />
        </li>
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
//Icons
import { library } from "@fortawesome/fontawesome-svg-core";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { inject, ref, watchEffect } from "@vue/runtime-core";
library.add(faChevronRight);

export default {
  name: "PxSearchResult",
  components: {
    FontAwesomeIcon,
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
