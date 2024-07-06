<script setup lang="ts">
const isAsideOpen = useAside();
</script>
<template>
  <main class="p-2" :class="!isAsideOpen || 'xl:ml-60'">
    <slot />
  </main>
</template>
