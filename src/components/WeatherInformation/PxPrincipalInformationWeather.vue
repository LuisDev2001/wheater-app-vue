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

    <PxImageWeather :urlImage="store.imgTypePrincipal" />

    <PxWeatherInformation />
  </section>
</template>

<script>
import PxButton from "../Button/PxButton";
import PxLocation from "../Button/PxLocation";
import PxImageWeather from "../ImageWeather/PxImageWeather";
import PxWeatherInformation from "../WeatherInformation/PxWeatherInformation";
//Utils
import { getData } from "@/utils/getData";
import { setHightlights } from "@/utils/setHightlights";
import { setWeather } from "@/utils/setWeather";
import { setDateForecast } from "@/utils/setDayForecast";

import { inject, onMounted, computed, ref } from "vue";

export default {
  name: "PxPrincipalInformationWeather",
  components: {
    PxButton,
    PxLocation,
    PxImageWeather,
    PxWeatherInformation,
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
      store.value.locationSucces = true;

      //Get info own ubi
      await getInfoOwnUbication();

      //Get forecast five days
      await getForecastFiveDays();
    };

    //Geolocation error
    const error = (error) => {
      store.value.locationError = true;
      console.warn("ERROR(" + error.code + "): " + error.message);
    };

    onMounted(() => {
      navigator.geolocation.getCurrentPosition(success, error, options.value);

      store.value.date = setDateOnLive;
    });

    const getInfoOwnUbication = async () => {
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

        //Set type principal image
        store.value.imgTypePrincipal = data.weather[0].icon;
      } catch (error) {
        console.log(`Error: ${error}`);
      }
    };

    const getForecastFiveDays = async () => {
      try {
        let objForecastFiveDays = {
          minTemp: 0,
          maxTemp: 0,
          day: "",
        };
        let DateObj = new Date();
        const LAT_AND_LONG = `lat=${store.value.lattitude}&lon=${store.value.longitude}`;
        const API_KEY = store.value.apiKey;
        const data = await getData(
          `${store.value.BASE_URL}/forecast?${LAT_AND_LONG}&appid=${API_KEY}`
        );
        let dateResponse = "";
        let tomorrowValue = 0;
        for (let index = 0; index < data.list.length; index += 8) {
          dateResponse = data.list[index].dt_txt.split(" ")[0];
          tomorrowValue = Number(
            data.list[index].dt_txt.split(" ")[0].split("-")[2]
          );
          const fullDate = setDateForecast(dateResponse);
          if (DateObj.getDate() + 1 === tomorrowValue) {
            objForecastFiveDays = {
              minTemp: data.list[index].main.temp_min,
              maxTemp: data.list[index].main.temp_max,
              day: "Tomorrow",
              imgUrl: data.list[index].weather[0].icon,
            };
          } else {
            objForecastFiveDays = {
              minTemp: data.list[index].main.temp_min,
              maxTemp: data.list[index].main.temp_max,
              day: fullDate,
              imgUrl: data.list[index].weather[0].icon,
            };
          }

          store.value.forecastFiveDays = [
            ...store.value.forecastFiveDays,
            objForecastFiveDays,
          ];
        }
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
