<script setup lang="ts">


const file = ref<File | null>(null);

function getFile(event: FileList): void {
  file.value = event[0] as File;
}

async function sendFile() {
  console.log(file.value.size)
  const formData = new FormData();
  formData.set('file', file.value);

  const {error} = await useApiFetch('/api/video/upload', {

    method: 'POST',
    body: formData
  })

  console.log(error)
}
</script>

<template>
  <UInput type="file" size="xl" icon="i-heroicons-folder" @change="getFile" />
  <UProgress size="md" indicator :value="50" />
  <UButton @click="sendFile" :disabled="!file">
    Upload
  </UButton>
</template>
