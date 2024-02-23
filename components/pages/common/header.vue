<template>
  <header class="sticky top-0 flex h-14 items-center justify-between border-b-gray-400 bg-white px-4 py-2">
    <div class="left-side">
      <div class="logo">LOGO</div>
    </div>
    <div class="right-side shrink-0" :class="!loggedIn && `hidden`">
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

<style lang="scss" scoped>
.logo {
  display: none;

  @include sp() {
    display: block;
  }
}

.right-side {
  @include pc() {
    display: none;
  }
}
</style>
