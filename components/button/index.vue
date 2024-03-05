<template>
  <button
    @click="$emit('click')"
    class="rounded-full font-semibold disabled:cursor-not-allowed"
    :class="getVariantClassNames"
    :disabled="disabled"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts" setup>
import { withDefaults } from 'vue';

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

const getVariantClassNames = computed(() => {
  switch (props.variant) {
    case "filled":
      return tw`w-full border-2 border-blue-500 bg-blue-500 px-4 py-2 text-white transition-all hover:bg-white hover:text-blue-500 disabled:cursor-not-allowed disabled:border-gray-400 disabled:bg-gray-400 disabled:text-white `;
    case "text":
      return tw`h-fit w-fit border-0 bg-transparent px-4 py-0 text-blue-500 hover:underline disabled:text-gray-400 disabled:hover:no-underline`;
    case "outlined":
      return tw`w-full border-2 border-blue-500 px-4 py-2 text-blue-500 hover:underline disabled:border-gray-400 disabled:text-gray-400 `;
    default:
      return "";
  }
});
</script>
