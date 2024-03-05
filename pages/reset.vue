<template>
  <NuxtLayout name="non-logged-in" :title="title">
    <div>
      <p>This is reset page</p>
      <NuxtLink to="/">Go to home</NuxtLink>
    </div>
  </NuxtLayout>
</template>

<script lang="ts" setup>
const title = "Reset Password";
</script>
