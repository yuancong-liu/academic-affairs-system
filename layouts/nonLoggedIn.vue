<template>
  <div class="page-wrapper">
    <PagesCommonHeader :loggedIn="false" />
    <main class="content">
      <h1 class="title">{{ title }}</h1>
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

<style lang="scss" scoped>
.page-wrapper {
  display: flex;
  min-height: 100vh;
  background-color: $color-surface-secondary;

  > .content {
    margin-top: 56px;
    max-width: 700px;
    padding: $spacing-16;
    width: 100%;
    margin: 56px auto 0;
  }

  > .content > .title {
    margin-bottom: $spacing-16;
    font-size: $font-size-page-title;
    font-weight: 600;
  }
}
</style>
