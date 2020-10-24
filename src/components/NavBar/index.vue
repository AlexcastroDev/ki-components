<template>
  <div
    :class="{
      'navbar-collapse': value,
      'navbar-main': true,
    }"
  >
    <div class="navbar__top">
      <div class="col-box title align-center justify-center text-center">
        <span> <slot name="title"></slot></span>
      </div>
      <div class="row h-100 justify-end align-self-center">
        <div class="col-8 middle">
          <div class="header align-center">
            <span><slot name="middle"></slot></span>
          </div>
        </div>
        <div class="col-lg-4 col-sm-12 align-self-center text-right">
          <slot name="end" />
        </div>
      </div>
    </div>
    <div class="layout-body">
      <menu-layout v-model="value" :items="menuItems">
        <div class="text-center row align-center menu-subtitle">
          <a
            @click="close"
            :class="{
              'col-9': value,
              'col menu-subtitle-opened': !value,
            }"
          >
            <div
              class="prepend-title"
              :class="{
                'display-none': value,
                'col-12': value,
                'col row overflow-hidden pl-4': !value,
              }"
            >
              <slot name="prepend"> </slot>
            </div>
            <Icon
              variant="primary"
              :icon="value ? 'arrow-left' : 'arrow-right'"
            />
          </a>
          <hr
            :class="{
              'divisor-collapse': value,
              'menu-divisor': true,
            }"
          />
        </div>
      </menu-layout>
      <div
        :class="{
          'main-app-collapse': value,
          'main-app': true,
        }"
      >
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import MenuLayout from './components/menu';
import Icon from './../Icon';

export default {
  name: 'Navbar',
  components: {
    MenuLayout,
    Icon,
  },
  data() {
    return {
      userMenu: false,
    };
  },
  props: {
    value: {
      type: Boolean,
      default: () => true,
    },
    menu: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    menuItems() {
      return this.menu.map(menuItem => {
        let path = '';

        if (!menuItem.isActive) {
          try {
            path = this.$route.path;
            menuItem.isActive = menuItem.link == path;
          } catch (e) {
            menuItem.isActive = false;
          }
        }
        return menuItem;
      });
    },
  },
  methods: {
    close() {
      this.$emit('close', false);
    },
  },
};
</script>

<style lang="scss" scoped>
@import './styles.scss';
</style>
