<template>
  <div
    class="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 shadow-md"
  >
    <div class="relative flex items-center justify-between">
      <a
        href="/"
        aria-label="Company"
        title="Company"
        class="inline-flex items-center"
      >
        <img src="public/logo.png" alt="logo" width="60" height="60" />
      </a>
      <ul class="flex items-center hidden space-x-8 lg:flex">
        <li>
          <NuxtLink
            to="/pricing"
            aria-label="Our product"
            title="Our product"
            class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
            >Pricing</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            to="/service"
            aria-label="Our product"
            title="Our product"
            class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
            >Capabilities</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            to="/work"
            aria-label="Product pricing"
            title="Product pricing"
            class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
            >Our Work</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            to="/About"
            aria-label="About us"
            title="About us"
            class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
            >About</NuxtLink
          >
        </li>
      </ul>
      <ul class="flex items-center hidden space-x-8 lg:flex">
        <li>
          <NuxtLink
            to="/order"
            class="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
            aria-label="Book a Call"
            title="Book a Call"
          >
            Book a Call
          </NuxtLink>
        </li>
      </ul>
      <div class="lg:hidden">
        <button
          aria-label="Open Menu"
          title="Open Menu"
          class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
          @click="isMenuOpen = true"
        >
          <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
            ></path>
            <path
              fill="currentColor"
              d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
            ></path>
            <path
              fill="currentColor"
              d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
            ></path>
          </svg>
        </button>
        <div v-if="isMenuOpen" class="absolute top-0 left-0 w-full">
          <div class="p-5 bg-gray-900 border rounded shadow-sm">
            <div class="flex items-center justify-between mb-4">
              <div>
                <a
                  href="/"
                  aria-label="BrandPlanet"
                  title="BrandPlanet"
                  class="inline-flex items-center"
                >
                  <img
                    src="public/logo.png"
                    alt="logo"
                    width="60"
                    height="60"
                  />
                </a>
              </div>
              <div>
                <button
                  aria-label="Close Menu"
                  title="Close Menu"
                  class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                  @click="isMenuOpen = false"
                >
                  <svg class="w-5 text-white" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            <nav>
              <ul class="space-y-4">
                <li>
                  <a
                    href="/"
                    aria-label="Our product"
                    title="Our product"
                    class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-deep-purple-accent-400"
                    >Pricing</a
                  >
                </li>
                <li>
                  <a
                    href="/"
                    aria-label="Our product"
                    title="Our product"
                    class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-deep-purple-accent-400"
                    >Capabilities</a
                  >
                </li>
                <li>
                  <a
                    href="/"
                    aria-label="Our product"
                    title="Our product"
                    class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-deep-purple-accent-400"
                    >Our Work</a
                  >
                </li>
                <li>
                  <a
                    href="/"
                    aria-label="Product pricing"
                    title="Product pricing"
                    class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-deep-purple-accent-400"
                    >Contact</a
                  >
                </li>
                <li>
                  <a
                    href="/"
                    aria-label="About us"
                    title="About us"
                    class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-deep-purple-accent-400"
                    >About</a
                  >
                </li>
                <li>
                  <a
                    href="/"
                    class="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                    aria-label="Sign up"
                    title="Sign up"
                  >
                    Book a Call
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    };
  },
};
</script>
