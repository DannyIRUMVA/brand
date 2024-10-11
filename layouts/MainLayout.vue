<script setup>
import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";
</script>
<template>
  <div class="bg-gray-900">
    <NavBar />
    <slot />
    <Footer />
  </div>
</template>

<style>
div {
  font-family: "Petrov Sans-Trial", sans-serif;
}
</style>
