<template>
  <component
    :is="element"
    :class="['button', classObj]"
    v-on="$listeners"
    v-bind="$attrs"
  >
    <Spinner class="button__spinner" :color="spinnerColor" />
    <slot />
  </component>
</template>

<script>
import Spinner from '../Spinner';

export default {
  name: 'Button',

  components: { Spinner },

  props: {
    secondary: {
      type: Boolean,
      default: false,
    },
    busy: {
      type: Boolean,
      default: false,
    },
    full: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    element() {
      const { to, href } = this.$attrs;

      return to ? 'router-link' : href ? 'a' : 'button';
    },

    classObj() {
      const { secondary, busy, full } = this;

      return { secondary, busy, full };
    },

    spinnerColor() {
      return this.secondary ? undefined : '#fff';
    },
  },
};
</script>

<style lang="scss" scoped>
@import './style.scss';
</style>
