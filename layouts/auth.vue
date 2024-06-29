<template>
  <div class="h-screen flex items-center justify-center overlay">
    <NuxtLink
      class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-full text-sm gap-x-2 px-3 py-2 shadow-sm text-white dark:text-gray-900 bg-gray-900 hover:bg-gray-800 disabled:bg-gray-900 dark:bg-white dark:hover:bg-gray-100 dark:disabled:bg-white focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center absolute top-4"
      to="/"
      ><span
        class="i-heroicons-home flex-shrink-0 h-5 w-5"
        aria-hidden="true"
      ></span
      ><span>Home</span>
    </NuxtLink>
    <slot />
  </div>
</template>
