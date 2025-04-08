<script setup>
import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";
</script>
<template>
  <div
    class="pattern-cross pattern-blue-500 pattern-bg-white pattern-size-6 pattern-opacity-20"
  >
    <div class="bg-gray-900">
      <NavBar />
      <slot />
      <Footer />
    </div>
  </div>
</template>

<style>
div {
  font-family: "Petrov Sans-Trial", sans-serif;
}
</style>
