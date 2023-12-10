<template>
  <button @click="$emit('click')" class="button">
    <span>
      <slot>hello</slot>
    </span>
  </button>
</template>

<script lang="ts" setup>
const props = defineProps({
  label: {
    type: String,
    default: 'button',
  },
  type: {
    type: String,
    default: 'button',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})
</script>

<style lang="scss" scoped>
.button {
  border: none;
}
</style>
