<script setup>
import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";
</script>
<template>
  <div
    class="bg-black overflow-hidden min-h-screen flex flex-col"
  >
  <div class="flex mt-16">
    <NavBar />
  </div>
    <slot />
  </div>
</template>
<style>
div {
  font-family: "Petrov Sans-Trial", sans-serif;
}
</style>


