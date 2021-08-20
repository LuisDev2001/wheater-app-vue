<template>
  <section class="weather">
    <div class="weather__search">
      <PxButton
        classButton="weather__search-button-places"
        textButton="Search for places"
        @click="handleOpenSearchLoaction"
      />
      <PxLocation @click="handleFindLocation" />
    </div>

    <PxImageWeather />

    <div class="weather__information">
      <div class="weather__information-temperature">
        <p class="weather__information-temperature-number">
          {{
            store.dataWeather.temperature !== ""
              ? store.dataWeather.temperature
              : "--"
          }}
        </p>
        <div class="weather__information-temperature-type">
          <span>°</span> <span>C</span>
        </div>
      </div>
      <p class="weather__information-type">
        {{
          store.dataWeather.temperatureDescription !== ""
            ? store.dataWeather.temperatureDescription
            : "--"
        }}
      </p>
      <div class="weather__information-date">
        <p>Today</p>
        <span>•</span>
        <p>
          {{ store.date }}
        </p>
      </div>
      <p class="weather__information-ubication">
        <font-awesome-icon icon="map-marker-alt" />
        {{
          store.dataWeather.locationName !== ""
            ? store.dataWeather.locationName
            : "--"
        }}
      </p>
    </div>
  </section>
</template>

<script>
import PxButton from "../Button/PxButton";
import PxLocation from "../Button/PxLocation";
import PxImageWeather from "../ImageWeather/PxImageWeather";
//Utils
import { getData } from "@/utils/getData";
import setHightlights from "@/utils/setHightlights";
import setWeather from "@/utils/setWeather";

//Icons
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { inject, onMounted, computed, ref } from "vue";
library.add(faMapMarkerAlt);

export default {
  name: "PxPrincipalInformationWeather",
  components: {
    PxButton,
    PxLocation,
    PxImageWeather,
    FontAwesomeIcon,
  },
  setup() {
    const store = inject("storeWeatherApp");

    //Geolocation options
    const options = ref({
      enableHighAccuracy: true,
      timeout: 6000,
      maximumAge: 0,
    });

    //Geolocation success
    const success = async (position) => {
      const coordenadas = position.coords;
      store.value.lattitude = coordenadas.latitude;
      store.value.longitude = coordenadas.longitude;

      await getInfoOwnUbication();
    };

    //Geolocation error
    const error = (error) => {
      console.warn("ERROR(" + error.code + "): " + error.message);
    };

    onMounted(() => {
      navigator.geolocation.getCurrentPosition(success, error, options.value);

      store.value.date = setDateOnLive;
    });

    const getInfoOwnUbication = async () => {
      console.log({
        lattitude: store.value.lattitude,
        longitude: store.value.longitude,
      });
      try {
        // API KEYS AND INFORMATION
        const LAT_AND_LONG = `lat=${store.value.lattitude}&lon=${store.value.longitude}`;
        const API_KEY = store.value.apiKey;
        const data = await getData(
          `${store.value.BASE_URL}/weather?${LAT_AND_LONG}&appid=${API_KEY}`
        );

        //Set information weather
        const temperatureKelvin = data.main.temp;
        const temperatureDescription = data.weather[0].main;
        const location = data.name;
        const temperatureCelcius = temperatureKelvin - 273.15;
        const objWeather = setWeather(
          temperatureCelcius,
          temperatureDescription,
          location
        );
        store.value.dataWeather = objWeather;

        // Set data for Hightlights
        const wind = data.wind.speed;
        const humidity = data.main.humidity;
        const visibility = data.visibility;
        const pressure = data.main.pressure;

        const objHightlights = setHightlights(
          wind,
          humidity,
          visibility,
          pressure
        );

        store.value.hightlights = objHightlights;
      } catch (error) {
        console.log(`Error: ${error}`);
      }
    };

    const setDateOnLive = computed(() => {
      const date = new Date();
      const day = date.getDate();
      const month = date.toLocaleString("default", { month: "short" });
      const dayName = date.toLocaleDateString("en-US", { weekday: "short" });
      return `${dayName}. ${day} ${month.replace(".", "")}`;
    });

    // Methods
    const handleOpenSearchLoaction = () => {
      store.value.modalState = true;
    };

    const handleFindLocation = async () => {
      navigator.geolocation.getCurrentPosition(success, error, options.value);
    };

    return {
      handleOpenSearchLoaction,
      handleFindLocation,
      store,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/sass/components/_PxPrincipalInformationWeather.scss";
</style>
