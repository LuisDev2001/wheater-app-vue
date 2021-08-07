<template>
  <div class="weather__location">
    <button class="weather__location-button">
      <font-awesome-icon icon="compass" />
    </button>
  </div>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCompass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faCompass);

export default {
  name: "PxLocation",
  components: {
    FontAwesomeIcon,
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/sass/components/_PxButtonLocation.scss";
</style>
