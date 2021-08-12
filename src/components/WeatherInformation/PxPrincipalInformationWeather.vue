<template>
  <section class="weather">
    <div class="weather__search">
      <PxButton
        classButton="weather__search-button-places"
        textButton="Search for places"
      />
      <PxLocation />
    </div>

    <PxImageWeather />

    <div class="weather__information">
      <div class="weather__information-temperature">
        <p class="weather__information-temperature-number">
          15
        </p>
        <div class="weather__information-temperature-type">
          <span>°</span> <span>C</span>
        </div>
      </div>
      <p class="weather__information-type">
        Shower
      </p>
      <div class="weather__information-date">
        <p>Today</p>
        <span>•</span>
        <p>Fri. 5 Jun</p>
      </div>
      <p class="weather__information-ubication">
        <font-awesome-icon icon="map-marker-alt" />
        Helsinki
      </p>
    </div>
  </section>
</template>

<script>
import PxButton from "../Button/PxButton";
import PxLocation from "../Button/PxLocation";
import PxImageWeather from "../ImageWeather/PxImageWeather";
//Icons
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faMapMarkerAlt);

export default {
  name: "PxPrincipalInformationWeather",
  components: {
    PxButton,
    PxLocation,
    PxImageWeather,
    FontAwesomeIcon,
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/sass/components/_PxPrincipalInformationWeather.scss";
</style>
