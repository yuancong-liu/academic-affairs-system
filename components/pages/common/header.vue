<template>
  <header
    class="sticky top-0 flex h-14 items-center justify-between border-b-gray-400 bg-white px-4 py-2"
  >
    <div class="left-side">
      <div class="block md:hidden">LOGO</div>
    </div>
    <div class="block shrink-0 md:hidden" :class="!loggedIn && `hidden`">
      <Button variant="text" @click="logout">logout</Button>
    </div>
  </header>
</template>

<script lang="ts" setup>
type Props = {
  loggedIn?: boolean;
};

const props = withDefaults(defineProps<Props>(), {
  loggedIn: true,
});
</script>
