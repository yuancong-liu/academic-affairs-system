<template>
  <header class="header-wrapper">
    <div class="left-side">
      <div class="logo">LOGO</div>
    </div>
    <div class="right-side" :class="!loggedIn && `-non-logged-in`">
      <Button variant="text" @click="logout">logout</Button>
    </div>
  </header>
</template>

<script lang="ts" setup>
type Props = {
  loggedIn?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  loggedIn: true,
});
</script>

<style lang="scss" scoped>
.header-wrapper {
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 56px;
  background-color: $color-surface-primary;
  padding: $spacing-8 $spacing-16;
  border-bottom: $stroke-width-1 solid $color-surface-secondary;
}

.left-side {
  // other styles
  > .logo {
    display: none;

    @include sp() {
      display: block;
    }
  }
}

.right-side {
  flex-shrink: 0;

  @include pc() {
    display: none;
  }

  &.-non-logged-in {
    display: none;
  }
}
</style>
