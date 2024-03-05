<template>
  <div class="flex min-h-screen flex-col bg-gray-100">
    <PagesCommonHeader :loggedIn="false" />
    <main class="mx-auto mb-0 w-full max-w-2xl p-4">
      <h1 class="text-5xl font-bold leading-normal">{{ title }}</h1>
      <slot></slot>
    </main>
  </div>
</template>

<script lang="ts" setup>
type Props = {
  title?: string;
};
const props = defineProps<Props>();
</script>
