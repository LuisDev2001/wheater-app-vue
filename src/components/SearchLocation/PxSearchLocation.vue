<template>
  <div class="search__location">
    <div class="search__location-button-close">
      <font-awesome-icon icon="times" />
    </div>
    <div class="search__location-section-search">
      <PxFormSearchLocation />
    </div>
    <div class="search__location-result">
      <ul class="search__location-result-list">
        <li class="search__location-result-item">
          London
          <font-awesome-icon icon="chevron-right" />
        </li>
        <li class="search__location-result-item">
          Barcelona
          <font-awesome-icon icon="chevron-right" />
        </li>
        <li class="search__location-result-item">
          Long Beach
          <font-awesome-icon icon="chevron-right" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import PxFormSearchLocation from "./PxFormSearchLocation";
//Icons
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTimes, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faTimes, faChevronRight);

export default {
  name: "PxSearchLocation",
  components: {
    PxFormSearchLocation,
    FontAwesomeIcon,
  },
};
</script>

<style lang="scss" scoped></style>
