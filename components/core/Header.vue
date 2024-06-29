<script setup lang="ts"></script>
<template>
  <header
    class="z-10 w-full h-14 px-3 sticky top-0 flex items-center justify-between backdrop-blur-sm border-b border-gray-200 dark:border-gray-800"
  >
    <div class="flex items-center">
      <Hamburger />
      <AppLogo />
    </div>

    <CoreSearch />

    <div class="flex items-center gap-2">
      <DarkMode />
      <Avatar />
      <LoginButton />
      <RegisterButton />
    </div>
  </header>
</template>
