<template>
  <div class="cardbox">
    <div class="row justify-between">
      <div class="col-9">
        <span v-if="title">{{ title }}</span>
      </div>
      <div class="col-3 dropdown text-right" v-if="hasOptionsValue()">
        <button class="dropdown-toggle btn btn-sm"></button>
        <div class="dropdown-menu">
          <a class="dropdown-item" href="#">Menu 1</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'C-Card',
  props: {
    title: {
      type: String,
      required: false,
    },
    options: {
      type: Object,
      required: false,
    },
  },
  methods: {
    hasOptionsValue() {
      return this.options ?? false;
    },
  },
};
</script>

<style lang="scss" scoped>
@import './style.scss';
</style>
