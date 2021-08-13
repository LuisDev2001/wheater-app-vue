<template>
  <form class="search__location-form">
    <div class="search__location-input">
      <font-awesome-icon icon="search" />
      <input type="text" name="location" placeholder="search location" />
    </div>
    <div class="search__location-action">
      <PxButton
        classButton="search__location-action-button"
        textButton="Search"
      />
    </div>
  </form>
</template>

<script>
import PxButton from "../Button/PxButton";
//Icons
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faSearch);

export default {
  name: "PxFormSearchLocation",
  components: {
    FontAwesomeIcon,
    PxButton,
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/sass/components/_PxFormSearchLocation.scss";
</style>
