<template>
  <div class="home">
    <PxPrincipalInformationWeather />
  </div>
</template>

<script>
import PxPrincipalInformationWeather from "@/components/WeatherInformation/PxPrincipalInformationWeather";

export default {
  name: "Home",
  components: {
    PxPrincipalInformationWeather,
  },
};
</script>
