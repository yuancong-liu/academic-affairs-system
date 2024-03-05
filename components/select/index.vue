<template>
  <div class="flex w-full flex-col gap-1">
    <div
      class="w-full border-b border-solid border-b-gray-400 pr-1 transition-all focus-within:border-b-gray-600"
      :class="{
        '!border-red-600': !!error,
        'cursor-not-allowed bg-gray-100': disabled,
      }"
    >
      <select
        v-model="value"
        class="w-full border-0 bg-transparent p-2 pr-0 focus:outline-none"
        @input="$emit('input', $event.target.value)"
        :name="name"
        :disabled="disabled"
        :class="{ 'text-gray-400': !value, 'cursor-not-allowed': disabled }"
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
