<template>
  <div class="page-wrapper">
    <div class="left-side">
      <PagesCommonSidebar />
    </div>
    <main class="right-side">
      <PagesCommonHeader />
      <div class="page-content">
        <h1 class="title">{{ title }}</h1>
        <slot></slot>
      </div>
    </main>
  </div>
</template>

<script lang="ts" setup>
import { useRoute } from "#imports";

const route = useRoute();
const title = route.meta.title;
</script>

<style lang="scss" scoped>
.page-wrapper {
  display: flex;
  min-height: 100vh;
  background-color: $color-surface-secondary;
}

.left-side {
  height: 100%;
  flex-shrink: 0;
  width: 256px;

  @include sp() {
    display: none;
  }
}
.right-side {
  margin-top: 56px;
  width: 100%;
}

.page-content {
  padding: $spacing-16;

  > .title {
    margin-bottom: $spacing-16;
    font-size: $font-size-page-title;
    font-weight: 600;
  }
}
</style>
