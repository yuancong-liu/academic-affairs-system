<template>
  <div class="flex w-full flex-col gap-1">
    <input
      class="w-full border-b border-solid border-gray-400 p-2 transition-[border] placeholder:ps-1 placeholder:text-gray-400 focus-within:border-gray-600 focus:outline-none"
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      :class="{
        '!border-red-600': !!error,
        'cursor-not-allowed bg-gray-100': disabled,
      }"
      :disabled="disabled"
      @input="$emit('update:modelValue', $event.target.value)"
      @blur="$emit('blur')"
    />
    <p class="text-end text-sm leading-none text-red-600">
      {{ error ?? "&zwnj;" }}
    </p>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, withDefaults } from "vue";

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
