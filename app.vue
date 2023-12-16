<template>
  <NuxtPage />
  <button @click="clearToken">clear token</button>
</template>

<script lang="ts" setup>
const router = useRouter();
const clearToken = () => {
  localStorage.removeItem("token");
  console.log(localStorage.getItem("token"));
  router.push("/");
};
</script>

<style lang="scss" scoped></style>
