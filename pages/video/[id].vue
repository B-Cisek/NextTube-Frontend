<script setup lang="ts">
const route = useRoute();
</script>

<template>
  <h1 class="text-2xl font-bold">Video: {{ route.params.id }}</h1>
</template>
