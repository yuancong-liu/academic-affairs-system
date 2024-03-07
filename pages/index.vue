<template>
  <NuxtLayout :title="title">
    <div class="grid w-full grid-cols-1 gap-2 md:grid-cols-2 md:grid-rows-2">
      <div class="row-span-2 w-full rounded bg-white p-2">AREA 1</div>
      <div class="w-full rounded bg-white p-2">AREA 2</div>
      <div class="w-full rounded bg-white p-2">AREA 3</div>
    </div>
  </NuxtLayout>
</template>

<script lang="ts" setup>
const title = "Home";
</script>
