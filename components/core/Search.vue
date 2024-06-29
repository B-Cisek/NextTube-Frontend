<script setup lang="ts">
const isSearchOpen = useSearch();
</script>
<template>
  <UButton
    @click="isSearchOpen = true"
    size="xl"
    variant="solid"
    color="gray"
    class="min-w-[300px] flex justify-between focus-visible:outline-none"
  >
    <div class="flex items-center gap-2">
      <span
        class="i-heroicons-magnifying-glass-20-solid flex-shrink-0 h-5 w-5"
        aria-hidden="true"
      ></span>
      <span class="text-left break-all line-clamp-1">Search...</span>
    </div>
    <div>
      <UBadge color="gray" variant="solid">Ctrl</UBadge>
      <UBadge color="gray" variant="solid">K</UBadge>
    </div>
  </UButton>
</template>
