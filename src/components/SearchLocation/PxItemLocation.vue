<template>
  <li
    class="search__location-result-item"
    @click="handleClickForSearchLocation"
  >
    {{ cityName }}, {{ cityNameCountry }}
    <font-awesome-icon icon="chevron-right" />
    <input type="hidden" :value="cityCode" />
  </li>
</template>

<script>
//Utils
import { getData } from "@/utils/getData";
import { setWeather } from "@/utils/setWeather";
import { setHightlights } from "@/utils/setHightlights";
import { setDateForecast } from "@/utils/setDayForecast";
//Icons
import { library } from "@fortawesome/fontawesome-svg-core";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { inject } from "@vue/runtime-core";
library.add(faChevronRight);

export default {
  name: "PxItemLocation",
  props: {
    cityName: String,
    cityNameCountry: String,
    cityCode: Number,
  },
  components: {
    FontAwesomeIcon,
  },
  setup(props) {
    const store = inject("storeWeatherApp");

    const handleClickForSearchLocation = async () => {
      //Clean forecast five days array
      store.value.forecastFiveDays = [];
      //Hide modal of search location
      store.value.modalState = false;

      const API_KEY = store.value.apiKey;
      const data = await getData(
        `${store.value.BASE_URL}/weather?id=${props.cityCode}&appid=${API_KEY}`
      );

      store.value.lattitude = data.coord.lat;
      store.value.longitude = data.coord.lon;

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

      await updateForecastFiveDays();
    };

    const updateForecastFiveDays = async () => {
      let objForecastFiveDays = {
        minTemp: 0,
        maxTemp: 0,
        day: "",
      };
      let DateObj = new Date();
      const API_KEY = store.value.apiKey;
      const data = await getData(
        `${store.value.BASE_URL}/forecast?id=${props.cityCode}&appid=${API_KEY}`
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
            descriptionWeather: data.list[
              index
            ].weather[0].description.toUpperCase(),
          };
        } else {
          objForecastFiveDays = {
            minTemp: data.list[index].main.temp_min,
            maxTemp: data.list[index].main.temp_max,
            day: fullDate,
            imgUrl: data.list[index].weather[0].icon,
            descriptionWeather: data.list[
              index
            ].weather[0].description.toUpperCase(),
          };
        }
        store.value.forecastFiveDays = [
          ...store.value.forecastFiveDays,
          objForecastFiveDays,
        ];
      }
    };

    return {
      handleClickForSearchLocation,
    };
  },
};
</script>

<style lang="scss" scoped>
.search__location {
  &-result {
    &-item {
      width: 100%;
      height: 64px;
      padding: 0 12px;
      margin: 0 0 1rem 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;
      border: 1px solid transparent;
      transition: border-color 0.3s ease;
      color: #e7e7eb;
      letter-spacing: 1px;
      svg {
        color: #616475;
      }
      &:hover,
      &.is-active {
        border-color: #616475;
      }
    }
  }
}
</style>
