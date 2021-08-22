<template>
  <form class="search__location-form" @submit.prevent="searchCity">
    <div class="search__location-input">
      <font-awesome-icon icon="search" />
      <input
        type="text"
        v-model="store.cityNameLocation"
        name="location"
        placeholder="search location"
        autocomplete="off"
      />
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
import { inject } from "vue";
import PxButton from "../Button/PxButton";
import { getData } from "@/utils/getData";
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
  setup() {
    const store = inject("storeWeatherApp");

    const searchCity = async () => {
      const data = await getData(
        "https://api-cities-fake.herokuapp.com/arrayCities"
      );
      store.value.citiesResult = data.filter((result) =>
        result.name
          .toLowerCase()
          .includes(store.value.cityNameLocation.toLowerCase())
      );
      console.log(store.value.citiesResult);
    };

    return {
      searchCity,
      store,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/sass/components/_PxFormSearchLocation.scss";
</style>
