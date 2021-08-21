<template>
  <section class="hightlights">
    <h2>Today’s Hightlights</h2>
    <div class="hightlights__container-cards">
      <PxCardHightlights
        cardTitle="Wind status"
        :cardNumber="
          store.locationSucces !== false ? store.hightlights.windStatus : 0
        "
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
        :cardNumber="
          store.locationSucces !== false ? store.hightlights.humidity : 0
        "
        cardTypeNumber="%"
      >
        <div class="card__hightlights-range">
          <div class="card__hightlights-range-numbers">
            <span>0</span>
            <span>50</span>
            <span>100</span>
          </div>
          <div class="card__hightlights-range-bar">
            <div
              class="card__hightlights-range-charge"
              :style="{
                width:
                  store.locationSucces !== false
                    ? store.hightlights.humidity + '%'
                    : 0 + '%',
              }"
            ></div>
          </div>
          <div class="card__hightlights-percent">%</div>
        </div>
      </PxCardHightlights>

      <PxCardHightlights
        cardTitle="Visibility"
        :cardNumber="
          store.locationSucces !== false ? store.hightlights.visibility : 0
        "
        cardTypeNumber="miles"
      >
      </PxCardHightlights>

      <PxCardHightlights
        cardTitle="Air Pressure"
        :cardNumber="
          store.locationSucces !== false ? store.hightlights.airPressure : 0
        "
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
import { inject, ref } from "@vue/runtime-core";
library.add(faLocationArrow);

export default {
  name: "PxHightlights",
  components: {
    PxCardHightlights,
    FontAwesomeIcon,
  },
  setup() {
    const store = inject("storeWeatherApp");

    return {
      store,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/sass/components/_PxHightlights.scss";
</style>
