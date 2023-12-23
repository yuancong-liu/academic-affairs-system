<template>
  <NuxtLink class="menu-item" :to="to">
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
.menu-item {
  color: $color-text-primary;
  padding: $spacing-16 $spacing-16;
}

.router-link-active {
  color: $color-text-active;
  background-color: $color-surface-active;
  font-weight: 600;
}
</style>
