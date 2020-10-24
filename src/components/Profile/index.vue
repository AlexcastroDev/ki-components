<template>
  <div
    :class="{
      row: true,
      user: !onlyAvatar,
      'p-1': !onlyAvatar,
    }"
  >
    <div class="col-1 avatar-align text-center">
      <div class="align-center">
        <Avatar :src="src" rounded />
      </div>
    </div>
    <div v-if="!onlyAvatar" class="col detail align-self-center pr-0">
      <div class="row user__title">
        <span class="title  p-0 align-bottom text-left">{{ name }}</span>
      </div>
      <div class="row user__subtitle p-0" v-if="withSubtitle">
        <span class="align-top text-left">{{ subtitle }}</span>
      </div>
    </div>
    <div class="col-box align-self-center">
      <icon v-if="dropdown" variant="white" icon="arrow-down"></icon>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  data() {
    return {
      open: false,
    };
  },
  props: {
    src: {
      type: String,
    },
    name: {
      type: String,
      default: () => 'John Doe',
    },
    subtitle: {
      type: String,
      default: () => '',
    },
    dropdown: {
      type: Boolean,
      default: () => false,
    },
    onlyAvatar: {
      type: Boolean,
      default: () => false,
    },
  },
  computed: {
    withSubtitle() {
      return this.subtitle != null;
    },
  },
};
</script>
<style lang="scss" scoped>
@import 'styles.scss';
</style>
