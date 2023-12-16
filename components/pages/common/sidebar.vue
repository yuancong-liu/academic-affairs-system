<template>
  <div class="sidebar-wrapper">
    <PagesCommonLogo />
    <div class="upper-part"></div>
    <div class="lower-part">
      <Button @click="logout">LOGOUT</Button>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.sidebar-wrapper {
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-shrink: 0;
  width: 256px;
  height: 100%;
  background-color: $color-surface-primary;
  border-right: $stroke-width-1 solid $color-surface-secondary;
}

.upper-part,
.lower-part {
  display: flex;
  flex-direction: column;
  gap: $spacing-16;
  padding: $spacing-16;
}
</style>
