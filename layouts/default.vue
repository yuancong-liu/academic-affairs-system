<template>
  <div class="flex min-h-screen bg-gray-50">
    <div class="hidden h-full w-64 flex-shrink-0 md:block">
      <PagesCommonSidebar />
    </div>
    <main class="w-full">
      <PagesCommonHeader />
      <div class="p-4">
        <h1 class="text-5xl font-bold leading-normal">{{ title }}</h1>
        <slot></slot>
      </div>
    </main>
  </div>
</template>

<script lang="ts" setup>
type Props = {
  title: string;
};

const props = defineProps<Props>();
</script>
