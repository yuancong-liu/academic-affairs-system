<template>
  <button
    @click="$emit('click')"
    class="button"
    :class="[{ '-disabled': disabled }, `-${variant}`]"
    :disabled="disabled"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts" setup>
type Props = {
  type?: string;
  disabled?: boolean;
  variant?: "filled" | "outlined" | "text";
};

const props = withDefaults(defineProps<Props>(), {
  type: "button",
  disabled: false,
  variant: "filled",
});
</script>

<style lang="scss" scoped>
.button {
  padding: $spacing-8 0;
  width: 100%;
  color: $color-surface-primary;
  border: none;
  font-weight: 600;
  font-size: $font-size-14;
  background-color: $color-surface-primary-main;
  border-radius: $border-radius-infinite;
  border: $stroke-width-2 solid $color-surface-primary-main;
  transition: all 0.1s ease-in-out;

  &:not(:disabled):hover {
    cursor: pointer;
    background-color: $color-surface-primary;
    color: $color-surface-primary-main;
  }

  &:disabled {
    cursor: not-allowed;
    background-color: $color-surface-secondary;
    border-color: $color-surface-secondary;
  }

  &.-outlined {
    background-color: $color-surface-primary;
    color: $color-surface-primary-main;

    &:not(:disabled):hover {
      background-color: $color-surface-primary-main;
      color: $color-surface-primary;
    }

    &:disabled {
      color: $color-text-secondary;
    }
  }

  &.-text {
    height: fit-content;
    width: fit-content;
    padding: 0 $spacing-8;
    background-color: transparent;
    color: $color-surface-primary-main;
    border: none;

    &:not(:disabled):hover {
      text-decoration: underline;
    }

    &:disabled {
      color: $color-text-secondary;
    }
  }
}
</style>
