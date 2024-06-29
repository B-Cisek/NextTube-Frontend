<script setup lang="ts">
const isSearchOpen = useSearch();

onMounted(() => window.addEventListener("keydown", onKeyDown));
onUnmounted(() => window.removeEventListener("keydown", onKeyDown));

const onKeyDown = (event) => {
  if (isSearchOpen.value) return;
  if ((event.metaKey || event.ctrlKey) && event.key === "k") {
    isSearchOpen.value = true;
  }
};

const groups = [
  {
    key: "users",
    label: (q) => q && `Users matching “${q}”...`,
    search: async (q) => {
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
