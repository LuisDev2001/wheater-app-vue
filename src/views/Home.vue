<template>
  <div class="home">
    <!-- Modal of search location -->
    <PxSearchLocation />

    <PxPrincipalInformationWeather />
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
