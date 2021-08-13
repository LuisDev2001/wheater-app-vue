<template>
  <section class="hightlights">
    <h2>Today’s Hightlights</h2>
    <div class="hightlights__container-cards">
      <PxCardHightlights
        cardTitle="Wind status"
        cardNumber="7"
        cardTypeNumber="mph"
      >
        <div class="card__hightlights-near-me">
          <span class="card__hightlights-icon">
            <font-awesome-icon icon="location-arrow" />
          </span>
          <span>WSW</span>
        </div>
      </PxCardHightlights>

      <PxCardHightlights
        cardTitle="Humidity"
        cardNumber="84"
        cardTypeNumber="%"
      >
        <div class="card__hightlights-range">
          <div class="card__hightlights-range-numbers">
            <span>0</span>
            <span>50</span>
            <span>100</span>
          </div>
          <div class="card__hightlights-range-bar">
            <div class="card__hightlights-range-charge"></div>
          </div>
          <div class="card__hightlights-percent">%</div>
        </div>
      </PxCardHightlights>

      <PxCardHightlights
        cardTitle="Visibility"
        cardNumber="6,4"
        cardTypeNumber="miles"
      >
      </PxCardHightlights>

      <PxCardHightlights
        cardTitle="Air Pressure"
        cardNumber="998"
        cardTypeNumber="mb"
      >
      </PxCardHightlights>
    </div>
  </section>
</template>

<script>
import PxCardHightlights from "../CardWeather/PxCardHightlights";

//Icons
import { library } from "@fortawesome/fontawesome-svg-core";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faLocationArrow);

export default {
  name: "PxHightlights",
  components: {
    PxCardHightlights,
    FontAwesomeIcon,
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/sass/components/_PxHightlights.scss";
</style>
