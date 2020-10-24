<template>
  <div :class="['modal', { open, [className]: className }]">
    <div class="modal__header">
      <div class="modal__title">
        <div class="modal__title--text textOverflow">
          {{ title }}
        </div>
      </div>
      <button class="btn modal__close" @click="closeModal()">
        <Icon icon="close" />
      </button>
    </div>
    <div class="modal__body">
      <div class="modal__content">
        <slot />
      </div>
      <div class="modal__actions" v-if="hasAction">
        <Button
          v-if="$listeners.secondaryAction"
          @click="$emit('secondaryAction', $event)"
          secondary
          class="modal__action secondary"
          :busy="secondaryBusy"
        >
          {{ secondaryLabel }}
        </Button>
        <Button
          v-if="$listeners.action"
          @click="$emit('action', $event)"
          :busy="busy"
          class="modal__action primary"
        >
          {{ label }}
        </Button>
      </div>
    </div>
  </div>
</template>

<script>
import Button from '@/components/Button/index.vue';
import Icon from '@/components/Icon';

export default {
  name: 'ModalBase',

  components: { Button, Icon },

  props: {
    open: {
      type: Boolean,
      default: false,
      required: true,
    },
    title: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: 'Confirmar',
    },
    secondaryLabel: {
      type: String,
      default: 'Cancelar',
    },
    busy: {
      type: Boolean,
      default: false,
    },
    secondaryBusy: {
      type: Boolean,
      default: false,
    },
    className: {
      type: String,
    },
  },

  computed: {
    hasAction() {
      const { action, secondaryAction } = this.$listeners;

      return Boolean(action || secondaryAction);
    },
  },
  methods: {
    closeModal($event) {
      this.$emit('closeClick', $event);
    },
  },
};
</script>

<style lang="scss" scoped>
@import './style.scss';
</style>
