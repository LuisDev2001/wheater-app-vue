<template>
  <div class="home">
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
export default {
  name: "Home",
  components: {
    PxPrincipalInformationWeather,
    PxDaysInformationWeather,
    PxHightlights,
  },
};
</script>
