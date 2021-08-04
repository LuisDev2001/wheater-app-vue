<template>
  <section class="weather">
    <div class="weather__search">
      <PxButton textButton="Seach for places" />
      <PxLocation />
    </div>
    <div class="weather__background"></div>

    <PxImageWeather />

    <div class="weather__information">
      <p class="weather__information-temperature">15 <span>°C</span></p>
      <p class="weather__information-type">
        Shower
      </p>
      <div class="weather__information-date">
        <p>Today</p>
        <span>•</span>
        <p>Fri. 5 Jun</p>
      </div>
      <p class="weather__information-ubication">
        Helsinki
      </p>
    </div>
  </section>
</template>

<script>
import PxButton from "./Button/PxButton";
import PxLocation from "./Button/PxLocation";
import PxImageWeather from "./ImageWeather/PxImageWeather";

export default {
  name: "PxPrincipalInformationWeather",
  components: {
    PxButton,
    PxLocation,
    PxImageWeather,
  },
};
</script>

<style lang="scss" scoped></style>
