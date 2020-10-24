<template>
  <div class="row user p-1">
    <div class="col-1 avatar-align text-center">
      <div class="align-center">
        <Avatar :src="src" rounded />
      </div>
    </div>
    <div class="col detail align-self-center pr-0">
      <div class="row">
        <span class="title p-0 align-bottom text-left">{{ name }}</span>
      </div>
      <div class="row p-0" v-if="withSubtitle">
        <em class="align-top text-left">{{ subtitle }}</em>
      </div>
    </div>
    <div class="col-box align-self-center">
      <Icon v-if="dropdown" variant="white" icon="arrow-down"></Icon>
    </div>
  </div>
</template>

<script>
import Avatar from '../Avatar';
import Icon from '../Icon';

export default {
  name: 'Profile',
  components: {
    Avatar,
    Icon,
  },
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
      default: () => null,
    },
    dropdown: {
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
