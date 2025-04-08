<script setup>
import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";
</script>
<template>
  <div
    class="bg-black overflow-hidden"
  >
    <NavBar />
    <slot />
  </div>
</template>
<style>
div {
  font-family: "Petrov Sans-Trial", sans-serif;
}
</style>
