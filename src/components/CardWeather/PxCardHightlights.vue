<template>
  <div class="card__hightlights">
    <h3 class="card__hightlights-title">{{ cardTitle }}</h3>
    <div class="card__hightlights-numbers">
      <span>
        {{ cardNumber }}
      </span>
      <span>
        {{ cardTypeNumber }}
      </span>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "PxCardHightlights",
  props: {
    cardTitle: String,
    cardNumber: Number,
    cardTypeNumber: String,
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/sass/components/_PxCardHightlights.scss";
</style>
