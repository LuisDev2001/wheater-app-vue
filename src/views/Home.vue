<template>
  <div class="app__weather">
    <!-- Modal of search location -->
    <PxSearchLocation />

    <PxPrincipalInformationWeather />
  </div>
  <div class="app__weather-information">
    <PxDaysInformationWeather />
    <PxHightlights />
    <div class="footer">
      <p>created by <b>LuisDev2001</b> - devChallenges.io</p>
    </div>
  </div>
</template>

<script>
import PxPrincipalInformationWeather from "@/components/WeatherInformation/PxPrincipalInformationWeather";
import PxDaysInformationWeather from "@/components/WeatherInformation/PxDaysInformationWeather";
import PxHightlights from "@/components/Hightlights/PxHightlights";
import PxSearchLocation from "@/components/SearchLocation/PxSearchLocation";

export default {
  name: "Home",
  components: {
    PxPrincipalInformationWeather,
    PxDaysInformationWeather,
    PxHightlights,
    PxSearchLocation,
  },
};
</script>
