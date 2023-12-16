<template>
  <div class="input-wrapper">
    <input
      :type="type"
      :placeholder="placeholder"
      @input="$emit('input', $event.target.value)"
      class="text-field"
    />
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  /**
   * The type of the input
   * @default text
   */
  type: {
    type: String,
    default: "text",
  },
  /**
   * The placeholder of the input
   * @default ""
   */
  placeholder: {
    type: String,
    default: "",
  },
});
</script>

<style lang="scss" scoped>
.input-wrapper {
  border-bottom: $stroke-width-1 solid $color-text-secondary;
  padding: $spacing-8;
  width: 100%;
  transition: all 0.1s ease-in-out;

  &:focus-within {
    border-bottom: $stroke-width-1 solid $color-text-primary;
  }
}

.text-field {
  border: 0;
  width: 100%;
  font-size: 16px;

  &::-webkit-input-placeholder {
    color: $color-text-secondary;
    padding-inline-start: $spacing-4;
  }
}
</style>
