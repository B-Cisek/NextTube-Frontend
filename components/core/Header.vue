<script setup lang="ts">
const { isAuthenticated, fetchUser } = useAuthStore();
</script>
<template>
  <header
    class="z-10 w-full h-14 px-3 sticky top-0 flex items-center justify-between border-b border-gray-200 dark:border-gray-800 backdrop-filter backdrop-blur dark:bg-gray-800/75 bg-white"
  >
    <div class="flex items-center">
      <Hamburger />
      <AppLogo />
    </div>

    <CoreSearch />

    <div class="flex items-center gap-2">
      <DarkMode />
      <Avatar v-if="isAuthenticated" />
      <LoginButton v-if="!isAuthenticated" />
      <RegisterButton v-if="!isAuthenticated" />
    </div>
  </header>
</template>
