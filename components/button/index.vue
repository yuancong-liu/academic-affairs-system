<template>
  <button @click="$emit('click')" class="button">
    <span>
      <slot>{{ label }}</slot>
    </span>
  </button>
</template>

<script lang="ts" setup>
const props = defineProps({
  /**
   * The label of the button
   * @default button
   */
  label: {
    type: String,
    default: "button",
  },
  /**
   * The type of the button
   * @default button
   */
  type: {
    type: String,
    default: "button",
  },
  /**
   * The disabled state of the button
   * @default false
   */
  disabled: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss" scoped>
.button {
  padding: $spacing-8 0;
  min-width: 256px;
  width: 100%;
  color: $color-surface-primary;
  border: none;
  font-weight: 600;
  font-size: $font-size-16;
  background-color: $color-surface-primary-main;
  border-radius: $border-radius-infinite;
  border: $stroke-width-2 solid $color-surface-primary-main;
  transition: all 0.1s ease-in-out;

  &:hover {
    cursor: pointer;
    background-color: $color-surface-primary;
    color: $color-surface-primary-main;
  }
}
</style>
