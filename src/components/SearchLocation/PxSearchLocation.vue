<template>
  <div class="search__location">
    <div class="search__location-button-close">
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
library.add(faTimes);

export default {
  name: "PxSearchLocation",
  components: {
    PxFormSearchLocation,
    PxSearchResult,
    FontAwesomeIcon,
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/sass/components/_PxSearchLocation.scss";
</style>
