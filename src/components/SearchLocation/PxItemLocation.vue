<template>
  <li class="search__location-result-item">
    {{ cityName }}, {{ cityNameCountry }}
    <font-awesome-icon icon="chevron-right" />
  </li>
</template>

<script>
//Icons
import { library } from "@fortawesome/fontawesome-svg-core";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faChevronRight);

export default {
  name: "PxItemLocation",
  props: {
    cityName: String,
    cityNameCountry: String,
  },
  components: {
    FontAwesomeIcon,
  },
};
</script>

<style lang="scss" scoped>
.search__location {
  &-result {
    &-item {
      width: 100%;
      height: 64px;
      padding: 0 12px;
      margin: 0 0 1rem 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;
      border: 1px solid transparent;
      transition: border-color 0.3s ease;
      color: #e7e7eb;
      svg {
        color: #616475;
      }
      &:hover,
      &.is-active {
        border-color: #616475;
      }
    }
  }
}
</style>
