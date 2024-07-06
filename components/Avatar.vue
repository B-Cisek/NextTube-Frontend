<script setup lang="ts">
const auth = useAuthStore();

const handleLogout = async () => {
  await auth.logout();
};
</script>
<template>
  <button @click="handleLogout">Logout</button>
  <UAvatar
    chip-color="blue"
    chip-text=""
    chip-position="top-left"
    size="md"
    src="https://avatars.githubusercontent.com/u/739984?v=4"
    alt="Avatar"
  />
</template>
