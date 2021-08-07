<template>
  <div class="home">
    <PxPrincipalInformationWeather />
    <PxDaysInformationWeather />
  </div>
</template>

<script>
import PxPrincipalInformationWeather from "@/components/WeatherInformation/PxPrincipalInformationWeather";
import PxDaysInformationWeather from "@/components/WeatherInformation/PxDaysInformationWeather";
export default {
  name: "Home",
  components: {
    PxPrincipalInformationWeather,
    PxDaysInformationWeather,
  },
};
</script>
