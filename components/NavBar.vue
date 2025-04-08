<script setup>
import { ref } from "vue";

const iconButtonClasses = "p-2 rounded-full text-white hover:bg-[#196453] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#68b4a4] focus:ring-white transition-colors duration-200";
</script>

<template>
  <div class="w-auto">
    <div class="px-4 py-3 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div class="relative flex items-center justify-between">
        <!-- Logo (Left) -->
        <div class="flex-shrink-0">
          <NuxtLink
            to="/"
            aria-label="Company"
            title="Company"
            class="inline-flex items-center"
          >
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
            </svg>
          </NuxtLink>
        </div>

        <!-- Navigation Icons (Center) -->
        <ul class="items-center hidden space-x-4 lg:flex">
          <li>
            <NuxtLink
              to="/capabilities"
              aria-label="Capabilities"
              title="Capabilities"
              class="px-6 py-2 rounded-md text-white hover:bg-[#196453]"
            >
              <!-- Heroicon: cube -->
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
              </svg>
            </NuxtLink>
          </li>
          <li class="relative">
            <NuxtLink
              to="/work"
              aria-label="Our Work"
              title="Our Work"
              class="p-2 rounded-full text-white hover:bg-[#196453] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#68b4a4] focus:ring-white transition-colors duration-200"
            >
              <!-- Heroicon: briefcase -->
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/about"
              aria-label="About us"
              title="About us"
              class="p-2 rounded-full text-white hover:bg-[#196453] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#68b4a4] focus:ring-white transition-colors duration-200"
            >
              <!-- Heroicon: information-circle -->
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/contact"
              aria-label="Contact Us"
              title="Contact Us"
              class="p-2 rounded-full text-white hover:bg-[#196453] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#68b4a4] focus:ring-white transition-colors duration-200"
            >
              <!-- Heroicon: mail -->
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </NuxtLink>
          </li>
        </ul>

        <!-- Book a Call Button (Right) -->
        <div class="hidden lg:flex">
          <NuxtLink
            to="/order"
            aria-label="Book a Call"
            title="Book a Call"
            class="inline-flex items-center justify-center px-6 py-2 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-[#196453] hover:bg-opacity-90 focus:shadow-outline focus:outline-none"
          >
            Book a Call
          </NuxtLink>
        </div>

        <!-- Mobile Menu Button -->
        <div class="lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            class="p-2 rounded-full text-white hover:bg-[#196453] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#68b4a4] focus:ring-white transition-colors duration-200"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.relative {
  position: relative;
}
</style>