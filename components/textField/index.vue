<template>
  <div class="input-wrapper">
    <input
      class="text-field"
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      :class="{ '-error': !!error, '-disabled': disabled }"
      :disabled="disabled"
      @input="$emit('update:modelValue', $event.target.value)"
      @blur="$emit('blur')"
    />
    <p class="error-message">{{ error ?? "&zwnj;" }}</p>
  </div>
</template>

<script lang="ts" setup>
type Props = {
  type?: string;
  placeholder?: string;
  modelValue?: string;
  error?: string;
  disabled?: boolean;
};

const props = withDefaults(defineProps<Props>(), {
  type: "text",
  placeholder: "",
  disabled: false,
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

  &.-disabled {
    cursor: not-allowed;
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
