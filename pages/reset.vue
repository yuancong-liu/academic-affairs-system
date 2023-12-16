<template>
  <div>
    <p>This is reset page</p>
    <NuxtLink to="/">Go to home</NuxtLink>
  </div>
</template>

<script lang="ts" setup>
import { definePageMeta } from "#imports";

definePageMeta({
  layout: "non-logged-in",
  title: "Reset Password",
});
</script>

<style lang="scss" scoped></style>