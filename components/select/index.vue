<template>
  <div class="select-wrapper">
    <select
      v-model="value"
      class="select"
      @input="$emit('input', $event.target.value)"
      :name="name"
      :disabled="disabled"
      :class="{ '-disabled': disabled, '-unselected': !value }"
    >
      <option value="" disabled selected hidden>Select an option</option>
      <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
        class="option"
      >
        {{ option.label }}
      </option>
    </select>
  </div>
</template>

<script lang="ts" setup>
type Option = {
  value: string;
  label: string;
};

type Props = {
  name: string;
  options: Option[];
  disabled?: boolean;
};

const props = defineProps<Props>();

const value = ref<string>("");
</script>

<style lang="scss" scoped>
.select-wrapper {
  border-bottom: $stroke-width-1 solid $color-text-secondary;
  padding: $spacing-8;
  width: 100%;
  transition: all 0.1s ease-in-out;

  &:focus-within {
    border-bottom: $stroke-width-1 solid $color-text-primary;
  }

  > .select {
    border: 0;
    width: 100%;
    font-size: $font-size-16;
  }

  > .select.-unselected {
    color: $color-text-secondary;
  }
}
</style>
