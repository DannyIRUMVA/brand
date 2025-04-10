<script setup>
import { ref } from "vue";

const isCollapsed = ref(true);

const iconButtonClasses = "p-2 rounded-full text-white hover:bg-[#196453] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#68b4a4] focus:ring-white transition-colors duration-200";
</script>

<template>
  <div class="md:flex">
    <div :class="{'w-16': isCollapsed, 'w-64': !isCollapsed}" class="relative hidden sm:block h-full bg-[#68b4a4] transition-width duration-200 md:h-auto md:w-auto md:mx-auto md:my-4 md:rounded-lg">
      <button
        @click="isCollapsed = !isCollapsed"
        aria-label="Toggle Menu"
        title="Toggle Menu"
        class="m-2 p-2 rounded-full text-white hover:bg-[#196453] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#68b4a4] focus:ring-white transition-colors duration-200"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path v-if="isCollapsed" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
      
      <ul class="mt-4 space-y-2">
        <li>
          <NuxtLink
            to="/"
            aria-label="Home"
            title="Home"
            class="flex items-center px-4 py-2 text-white hover:bg-[#196453]"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
            </svg>
            <span v-if="!isCollapsed" class="ml-4">Home</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/capabilities"
            aria-label="Capabilities"
            title="Capabilities"
            class="flex items-center px-4 py-2 text-white hover:bg-[#196453]"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
            </svg>
            <span v-if="!isCollapsed" class="ml-4">Service</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/work"
            aria-label="Our Work"
            title="Our Work"
            class="flex items-center px-4 py-2 text-white hover:bg-[#196453]"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
            <span v-if="!isCollapsed" class="ml-4">Work</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/about"
            aria-label="About us"
            title="About us"
            class="flex items-center px-4 py-2 text-white hover:bg-[#196453]"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span v-if="!isCollapsed" class="ml-4">About</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/contact"
            aria-label="Contact Us"
            title="Contact Us"
            class="flex items-center px-4 py-2 text-white hover:bg-[#196453]"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
            <span v-if="!isCollapsed" class="ml-4">Contact</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/order"
            aria-label="Book a Call"
            title="Book a Call"
            class="flex items-center px-4 py-2 text-white hover:bg-[#196453]"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
            <span v-if="!isCollapsed" class="ml-4">Order</span>
          </NuxtLink>
        </li>
      </ul>
    </div>
    
    <!-- Main Content -->
    <div class="flex-grow">
      <div class="md:hidden flex justify-between  bg-[#68b4a4] inset-0 -mt-16 p-1 max-w-auto mx-auto">
        <NuxtLink
          to="/"
          aria-label="Home"
          title="Home"
          class="text-white hover:bg-[#196453] p-2 rounded-md px-6"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
          </svg>
        </NuxtLink>
        <NuxtLink
          to="/capabilities"
          aria-label="Capabilities"
          title="Capabilities"
          class="text-white hover:bg-[#196453] p-2 rounded-md px-6"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
          </svg>
        </NuxtLink>
        <NuxtLink
          to="/work"
          aria-label="Our Work"
          title="Our Work"
          class="text-white hover:bg-[#196453] p-2 rounded-md px-6"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
          </svg>
        </NuxtLink>
        <NuxtLink
          to="/about"
          aria-label="About us"
          title="About us"
          class="text-white hover:bg-[#196453] p-2 rounded-md px-6"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        </NuxtLink>
        <NuxtLink
          to="/contact"
          aria-label="Contact Us"
          title="Contact Us"
          class="text-white hover:bg-[#196453] p-2 rounded-md px-6"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
          </svg>
        </NuxtLink>
        <NuxtLink
          to="/order"
          aria-label="Book a Call"
          title="Book a Call"
          class="text-white hover:bg-[#196453] p-2 rounded-md px-6"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.relative {
  position: relative;
  margin-top: 8em;
  left: 0;
  z-index: 1000;
}

.bg-gray-800 {
  background-color: #1f2937;
}

.transition-width {
  transition-property: width;
}
</style>
