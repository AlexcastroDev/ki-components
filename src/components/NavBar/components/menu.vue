<template>
  <div
    :class="{
      'menu-collapse': value,
      'menu-nav': true,
      'menu-left': true,
    }"
  >
    <slot> </slot>
    <ul>
      <li class="menu-row mt-2" v-for="(item, key) in items" v-bind:key="key">
        <div
          :class="{
            active: item.isActive,
            inactive: !item.isActive,
          }"
        ></div>
        <router-link class="ml-1" :to="item.link">
          <Icon :icon="item.icon ? item.icon : 'question'" />
          <span> {{ !value ? item.name : '' }}</span></router-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
import Icon from './../../Icon';

export default {
  name: 'Menu',
  components: {
    Icon,
  },
  props: {
    value: {
      type: Boolean,
      default: () => true,
    },
    align: {
      type: String,
      default: () => 'left',
    },
    items: {
      type: Array,
      default: () => 'left',
    },
  },
  computed: {
    getAlignment() {
      if (this.align !== 'left' || this.align !== 'right') {
        return 'menu-left';
      }
      return `menu-${this.align}`;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../../styles/global.scss';

.layout-body ul {
  padding-left: 0.8em;
}
.layout-body li {
  inline-size: max-content;

  list-style: none;
  color: #575453;
  font-style: normal;
  font-weight: bold;
  font-family: Nunito;
  font-size: 18px;
  line-height: 38px;

  .active {
    border: 2px solid #ffa490;
    border-radius: 30px;
    width: 0px;
    float: left;
    height: 32px;
    margin-right: 5px;
  }
  .inactive {
    border: 2px solid transparent;
    width: 0px;
    float: left;
    height: 32px;
    margin-right: 5px;
  }
}
.menu-row a {
  -webkit-animation-name: fadeIn;
  -webkit-animation-duration: 2s;
  animation-name: fadeIn;
  animation-duration: 2s;
}
</style>
