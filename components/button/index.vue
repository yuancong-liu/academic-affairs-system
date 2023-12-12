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
  color: $white;
  border: none;
  font-weight: 600;
  background-color: $surface-blue;
  border-radius: $border-radius-infinite;
  border: $stroke-width-2 solid $surface-blue;
  transition: all 0.1s ease-in-out;

  &:hover {
    cursor: pointer;
    background-color: $white;
    color: $surface-blue;
  }
}
</style>
