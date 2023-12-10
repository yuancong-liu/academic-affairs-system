<template>
  <div>
    <p class="p">Hello world!</p>
    <Button @click="() => console.log('clicked!')">Click me!</Button>
  </div>
</template>

<script lang="ts" setup>
import { Button } from '#components';
</script>

<style lang="scss" scoped>
</style>
