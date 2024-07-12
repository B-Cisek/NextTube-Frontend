<script setup lang="ts">
const video = ref<HTMLVideoElement | null>(null);

onMounted(async () => {
  //if (!video.value) return;

  const mediaSource = new MediaSource();
  video.value.src = URL.createObjectURL(mediaSource);

  mediaSource.addEventListener("sourceopen", async () => {
    const sourceBuffer = mediaSource.addSourceBuffer(
      'video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
    );

    const response = await $fetch<ReadableStream>(
      "http://localhost/api/video",
      {
        method: "GET",
        responseType: "stream",
      }
    );
    const reader = response.body?.getReader();

    if (!reader) return;

    const pump = async () => {
      const { value, done } = await reader.read();
      if (done) {
        mediaSource.endOfStream();
        return;
      }

      sourceBuffer.appendBuffer(value);
      sourceBuffer.addEventListener("updateend", pump, { once: true });
    };

    pump();
  });
});
</script>

<template>
  <video ref="video" width="300" height="200" autoplay></video>
</template>
