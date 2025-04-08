<script setup lang="ts">
useHead({
  title: "Brand Planet Ltd",
  meta: [{ name: "Brand Planet", content: "Biggest branding agency" }],
  bodyAttrs: {
    class: "test",
  },
  script: [
    { innerHTML: "console.log('Hello world this belongs to the company')" },
  ],
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
