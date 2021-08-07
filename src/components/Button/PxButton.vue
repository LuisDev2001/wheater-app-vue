<template>
  <div class="container__button">
    <button :class="classButton">{{ textButton }}</button>
  </div>
</template>

<script>
export default {
  name: "PxButton",
  props: {
    textButton: String,
    classButton: String,
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/sass/components/_PxButton.scss";
</style>
