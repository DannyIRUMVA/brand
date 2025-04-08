<template>
  <div
    class="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white"
  >
    <h1 class="text-4xl font-bold mb-4">About Page</h1>
    <p class="max-w-xl text-center mb-6">
      This is a simple about page. Our interactive 3D planet demonstrates
      dynamic navigation where links stick to a rotating sphere!
    </p>
    <NuxtLink
      to="/"
      class="bg-[#66b5a1] px-4 py-2 rounded hover:bg-teal-600 transition"
    >
      Back to Home
    </NuxtLink>
  </div>
</template>

<script setup></script>
