<template>
  <div class="weather__image-type">
    <slot v-if="!store.locationSucces">
      <img src="@/assets/img/loader.svg" alt="Loader" />
    </slot>
    <slot v-else>
      <img :src="'/assets/img/' + urlImage + '.png'" alt="Image Weather" />
    </slot>
  </div>
</template>

<script>
import { inject } from "@vue/runtime-core";
export default {
  name: "PxImageWeather",
  props: {
    urlImage: String,
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
.weather__image-type {
  img {
    margin: 16px auto 0;
    display: block;
    max-width: 150px;
    @media screen and (min-width: 1200px) {
      margin: 46px auto 0;
    }
  }
}
</style>
