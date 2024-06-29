<script setup lang="ts">
const route = useRoute();
const isAsideOpen = useAside();

const links = [
  [
    {
      label: "Home",
      icon: "i-heroicons-home",
      to: "/",
    },
    {
      label: "Trending",
      icon: "i-heroicons-chart-bar",
      to: `${
        route.path.startsWith("/dev") ? "/dev" : ""
      }/components/vertical-navigation`,
    },
    {
      label: "Command Palette",
      icon: "i-heroicons-command-line",
      to: "/components/command-palette",
    },
  ],
  [
    {
      label: "Examples",
      icon: "i-heroicons-light-bulb",
    },
    {
      label: "Help",
      icon: "i-heroicons-question-mark-circle",
    },
  ],
];
</script>
<template>
  <aside
    v-show="isAsideOpen"
    class="fixed top-14 left-0 w-0 xl:flex hidden xl:w-60 h-full border-r border-gray-200 dark:border-gray-800"
  >
    <nav class="w-full p-3">
      <UVerticalNavigation :links="links" :ui="{ size: 'text-lg' }" />
    </nav>
  </aside>
</template>
