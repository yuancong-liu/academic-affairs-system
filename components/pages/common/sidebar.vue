<template>
  <div class="sidebar-wrapper">
    <PagesCommonLogo />
    <div class="upper-part">
      <PagesMenuItem to="/" icon="home">
        HOME
      </PagesMenuItem>
      <PagesMenuItem to="/courses" icon="menu">
        COURSES
      </PagesMenuItem>
      <PagesMenuItem to="/timetable" icon="orders">
        TIMETABLE
      </PagesMenuItem>
      <PagesMenuItem to="/results" icon="orders">
        RESULTS
      </PagesMenuItem>
      <PagesMenuItem to="/users" icon="users">
        MESSAGES
      </PagesMenuItem>
    </div>
    <div class="lower-part">
      <PagesMenuItem to="/me" icon="settings">
        ME
      </PagesMenuItem>
      <Button @click="logout">LOGOUT</Button>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.sidebar-wrapper {
  position: fixed;
  display: grid;
  grid-template-rows: auto 1fr auto;
  flex-shrink: 0;
  width: 256px;
  height: 100%;
  background-color: $color-surface-primary;
  border-right: $stroke-width-1 solid $color-surface-secondary;
}

.upper-part,
.lower-part {
  display: flex;
  width: 100%;
  flex-direction: column;
}
</style>
