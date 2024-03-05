<template>
  <NuxtLink class="p-4" :to="to">
    <slot></slot>
  </NuxtLink>
</template>

<script lang="ts" setup>
type Props = {
  to: string;
  icon: string;
};

const props = defineProps<Props>();
</script>

<style lang="scss" scoped>
.router-link-active {
  @apply text-white;
  @apply bg-slate-400;
  @apply font-bold;
}
</style>
