<template>
  <div class="loader" :style="borderColor"></div>
</template>

<script>
export default {
  props: {
    color: {
      default: '#1c307f',
    },
  },

  computed: {
    borderColor() {
      return `border-left-color: ${this.color}`;
    },
  },
};
</script>

<style lang="scss" scoped>
@import './style.scss';
</style>
