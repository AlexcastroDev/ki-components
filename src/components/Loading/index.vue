<template>
  <div :class="`loader-${size} ${getStyle}`"></div>
</template>

<script>
export default {
  name: 'Loader',
  props: {
    bars: {
      type: Boolean,
      default: () => false,
    },
    size: {
      type: String,
      default: () => 'md',
    },
    material: {
      type: Boolean,
      default: () => false,
    },
  },
  computed: {
    getStyle() {
      let availables = [
        {
          name: 'bars',
          css: 'l-bars',
          isActive: this.bars,
        },
        {
          name: 'material',
          css: 'circle',
          isActive: this.material,
        },
      ];
      let style = availables.find(loaders => loaders.isActive == true) || {};
      return Object.keys(style).length ? style.css : 'circle';
    },
  },
};
</script>

<style lang="scss" scoped>
@import './styles.scss';
</style>
