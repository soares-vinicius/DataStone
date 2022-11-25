<script setup lang="ts">
defineProps<{
  text: string;
}>();
</script>

<template>
  <h1>{{ text }}</h1>
</template>

<style scoped lang="scss">
h1 {
  font-size: 3rem;
  font-weight: bold;
  text-transform: uppercase;
}
</style>
