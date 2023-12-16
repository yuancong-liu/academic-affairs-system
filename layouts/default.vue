<template>
  <div class="page-wrapper">
    <div class="left-side">
      <PagesCommonSideMenu />
    </div>
    <main class="right-side">
      <PagesCommonHeader />
      <slot></slot>
    </main>
  </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
.page-wrapper {
  display: flex;
  min-height: 100vh;
}

.left-side {
  flex-shrink: 0;
  width: 256px;

  @include sp() {
    display: none;
  }
}
.right-side {
  width: 100%;
  background-color: $color-surface-secondary;
}
</style>