<script setup lang="ts">
definePageMeta({
  layout: false,
});
const route = useRoute<_useRoute>();

const { status } = await useApiFetch(
  `/api/email/verify/${route.params.id}/${route.params.hash}?expires=${route.query.expires}&signature=${route.query.signature}`
);

console.log(status.value);

const message = ref<string>("");

message.value =
  status.value === "success"
    ? "The account has been verified"
    : "Error: try verify account again (make sure you are logged in)";
</script>

<template>
  <div class="flex items-center justify-center h-screen">
    <div class="flex flex-col items-center gap-5">
      <span class="text-2xl text-center">{{ message }}</span>
      <NuxtLink to="/">
        <UButton color="white" variant="solid">Go Home</UButton>
      </NuxtLink>
    </div>
  </div>
</template>
