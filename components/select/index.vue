<template>
  <div class="flex w-full flex-col gap-1">
    <select
      v-model="value"
      class="w-full border-0 border-b border-solid border-b-gray-400 bg-transparent p-2 transition-all focus:border-b-gray-600"
      @input="$emit('input', $event.target.value)"
      :name="name"
      :disabled="disabled"
      :class="{
        'text-gray-400': !value,
        'cursor-not-allowed': disabled,
        '!border-red-600': !!error,
      }"
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
    <p class="text-end text-sm leading-none text-red-600">
      {{ error ?? "&zwnj;" }}
    </p>
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
  error?: string;
};

const props = defineProps<Props>();

const value = ref<string>("");
</script>
