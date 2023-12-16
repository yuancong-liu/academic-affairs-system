<template>
  <header class="header-wrapper">
    <div class="left-side"></div>
    <div class="right-side">
      <Button variant="text" @click="logout">logout</Button>
    </div>
  </header>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.header-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 48px;
  background-color: $color-surface-primary;
  padding: $spacing-8;
  border-bottom: $stroke-width-1 solid $color-surface-secondary;
}

.right-side {
  flex-shrink: 0;

  @include pc() {
    display: none;
  }
}
</style>
