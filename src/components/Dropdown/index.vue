<template>
  <button
    v-click-outside="hide"
    id="btn-options"
    :class="{
      dropbtn: true,
      dropdown: hover,
      'dropdown-btn': !hover,
    }"
  >
    <slot />
    <div
      class="dropdown-content"
      :class="`position-${position} ${btnHoverClass} ${isOpened}`"
    >
      <slot name="options"></slot>
    </div>
  </button>
</template>

<script>
import ClickOutside from 'vue-click-outside';

export default {
  name: 'Dropdown',
  data() {
    return {
      clickout: false,
    };
  },
  props: {
    value: {
      required: false,
    },
    options: {
      type: Object,
      required: false,
      default: () => {},
    },
    position: {
      type: String,
      default: () => 'right',
    },
    hover: {
      type: Boolean,
      default: () => false,
    },
  },
  computed: {
    btnHoverClass() {
      return this.hover ? 'dropdown' : 'dropdown-btn';
    },
    isOpened() {
      return this.value ? 'dropdown-btn__active' : 'dropdown-btn';
    },
  },
  methods: {
    hide() {
      if (this.value) this.$emit('close', true);
    },
  },
  directives: {
    ClickOutside,
  },
};
</script>

<style lang="scss" scoped>
@import './style.scss';
</style>
