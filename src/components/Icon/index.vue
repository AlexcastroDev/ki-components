<template>
  <i :class="`icon c-${icon} icon-${size} icon-${variant} `" />
</template>

<script>
export default {
  name: 'C-Icon',
  props: {
    icon: {
      required: true,
      type: String,
    },
    variant: {
      default: () => 'default',
      type: String,
    },
    size: {
      required: false,
      type: String,
      default: () => 'md',
    },
  },
};
</script>

<style lang="scss" scoped>
@import './style.scss';
</style>
