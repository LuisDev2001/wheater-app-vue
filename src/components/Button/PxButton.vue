<template>
  <div class="container__button">
    <button class="container__button-action">{{ textButton }}</button>
  </div>
</template>

<script>
export default {
  name: "PxButton",
  props: {
    textButton: String,
  },
};
</script>

<style lang="scss" scoped></style>
