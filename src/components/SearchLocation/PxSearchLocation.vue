<template>
  <div
    :class="{
      search__location: true,
      'is-open': isOpen,
    }"
  >
    <div
      class="search__location-button-close"
      @click="handleCloseSearchLocation"
    >
      <div class="search__location-button-close-action">
        <font-awesome-icon icon="times" />
      </div>
    </div>
    <div class="search__location-section-search">
      <PxFormSearchLocation />
    </div>

    <PxSearchResult />
  </div>
</template>

<script>
import PxFormSearchLocation from "./PxFormSearchLocation";
import PxSearchResult from "./PxSearchResult";

//Icons
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { inject } from "@vue/runtime-core";
library.add(faTimes);

export default {
  name: "PxSearchLocation",
  props: {
    isOpen: Boolean,
  },
  components: {
    PxFormSearchLocation,
    PxSearchResult,
    FontAwesomeIcon,
  },
  setup() {
    const store = inject("storeWeatherApp");

    const handleCloseSearchLocation = () => {
      store.value.modalState = false;
    };

    return {
      handleCloseSearchLocation,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/sass/components/_PxSearchLocation.scss";
</style>
