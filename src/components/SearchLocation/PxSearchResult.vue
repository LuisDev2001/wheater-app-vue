<template>
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
</template>

<script>
//Icons
import { library } from "@fortawesome/fontawesome-svg-core";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faChevronRight);

export default {
  name: "PxSearchResult",
  components: {
    FontAwesomeIcon,
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/sass/components/_PxSearchResult.scss";
</style>
