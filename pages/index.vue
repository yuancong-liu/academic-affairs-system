<template>
  <NuxtLayout :title="title">
    <div
      class="grid w-full grid-cols-1 gap-2 md:grid-cols-[3fr_2fr_2fr] md:grid-rows-2"
    >
      <div class="md:row-span-2">
        <PagesTopTodayCard />
      </div>
      <div class="">
        <Container>AREA 2</Container>
      </div>
      <div class="">
        <Container>AREA 3</Container>
      </div>
      <div class="md:col-span-2">
        <Container>AREA 4</Container>
      </div>
    </div>
  </NuxtLayout>
</template>

<script lang="ts" setup>
const title = "Home";
</script>
