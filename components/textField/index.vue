<template>
  <div class="w-full flex flex-col gap-1">
    <input
      class="w-full border-b p-2 border-solid border-gray-400 transition-all focus-within:border-gray-600 placeholder:text-gray-400 placeholder:ps-1"
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      :class="{ '!border-red-600': !!error, 'cursor-not-allowed bg-gray-100': disabled }"
      :disabled="disabled"
      @input="$emit('update:modelValue', $event.target.value)"
      @blur="$emit('blur')"
    />
    <p class="text-red-600 leading-none text-end text-sm">{{ error ?? "&zwnj;" }}</p>
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
