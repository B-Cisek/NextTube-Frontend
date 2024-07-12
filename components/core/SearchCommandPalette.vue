<script setup lang="ts">
const isSearchOpen = useSearch();

onMounted(() => window.addEventListener("keydown", onKeyDown));
onUnmounted(() => window.removeEventListener("keydown", onKeyDown));

const onKeyDown = (event: KeyboardEvent) => {
  if (isSearchOpen.value) return;
  if ((event.metaKey || event.ctrlKey) && event.key === "k") {
    isSearchOpen.value = true;
  }
};

const groups = [
  {
    key: "users",
    label: (q: string) => q && `Users matching “${q}”...`,
    search: async (q: string) => {
      if (!q) {
        return [];
      }

      const users = await $fetch<any[]>(
        "https://jsonplaceholder.typicode.com/users",
        { params: { q } }
      );

      return users.map((user) => ({
        id: user.id,
        label: user.name,
        suffix: user.email,
      }));
    },
  },
];
</script>

<template>
  <div>
    <UModal v-model="isSearchOpen">
      <UCommandPalette nullable :autoselect="false" :groups="groups" />
    </UModal>
  </div>
</template>
