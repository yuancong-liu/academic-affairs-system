<template>
  <div class="w-full flex flex-col gap-1">
    <select
      v-model="value"
      class="border-0 p-2  w-full bg-transparent  border-b border-solid border-b-gray-400 transition-all focus:border-b-gray-600"
      @input="$emit('input', $event.target.value)"
      :name="name"
      :disabled="disabled"
      :class="{ 'text-gray-400': !value, 'cursor-not-allowed': disabled, '!border-red-600': !!error}"
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
    <p class="text-red-600 leading-none text-end text-sm">{{ error ?? "&zwnj;" }}</p>
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
