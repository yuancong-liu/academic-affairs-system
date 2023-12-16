<template>
  <div class="input-wrapper">
    <input
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      @blur="$emit('blur')"
      class="text-field"
      :class="{ '-error': !!error }"
    />
    <p class="error-message">{{ error ?? "&zwnj;" }}</p>
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
  modelValue: String,
  error: String,
});
</script>

<style lang="scss" scoped>
.input-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: $spacing-4;
}

.text-field {
  border: 0;
  border-bottom: $stroke-width-1 solid $color-text-secondary;
  padding: $spacing-8;
  width: 100%;
  font-size: $font-size-16;

  &:focus {
    border-bottom: $stroke-width-1 solid $color-text-primary;
  }

  &.-error {
    border-bottom: $stroke-width-1 solid $color-error;
  }

  &::-webkit-input-placeholder {
    color: $color-text-secondary;
    padding-inline-start: $spacing-4;
  }
}

.error-message {
  color: $color-error;
  font-size: $font-size-14;
  line-height: 1;
  text-align: end;
}
</style>
