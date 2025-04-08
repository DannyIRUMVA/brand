<script setup></script>
<template>
  <div
    class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12"
  >
    <div class="mr-auto place-self-center lg:col-span-7">
      <h3 class="font-extrabold text-white">Welcome to</h3>
      <h1
        class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white"
      >
        BrandPlanet Ltd
      </h1>
      <p
        class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"
      >
        At BrandPlanet Ltd, we believe that great design transcends boundaries.
        Based in the heart of Kigali, Rwanda, we offer world-class design,
        print, and branding solutions that help businesses of all sizes elevate
        their presence in a competitive market. Whether you’re a local startup
        or an international enterprise, our creative team is here to bring your
        brand to life with innovative, high-quality solutions.
      </p>
      <a
        href="#"
        class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
      >
        Learn more
        <svg
          class="w-5 h-5 ml-2 -mr-1"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </a>
      <a
        href="#"
        class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
      >
        Speak to Sales
      </a>
    </div>
    <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
      <img src="public/home_section.png" alt="" />
    </div>
  </div>

  <Service />

  <div
    class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
  >
    <div class="grid gap-10 row-gap-8 lg:grid-cols-5">
      <div class="lg:col-span-2">
        <p
          class="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase"
        >
          20 Nov 2020
        </p>
        <div class="mb-3">
          <a
            href="/"
            aria-label="Article"
            class="inline-block text-gray-300 transition-colors duration-200 hover:text-deep-purple-accent-400"
          >
            <p
              class="font-sans text-xl font-extrabold leading-none tracking-tight lg:text-4xl xl:text-5xl"
            >
              Why choose us.
            </p>
          </a>
        </div>
        <p class="mb-4 text-base text-gray-700 md:text-lg">
          we don't just design – we craft unique visual identities that tell
          your brand’s story. Our team of passionate, highly skilled designers
          takes a personalized approach to every project, ensuring that each
          design aligns perfectly with your business goals.
        </p>
      </div>
      <div class="flex flex-col space-y-8 lg:col-span-3">
        <div>
          <p class="mb-4 text-base text-gray-700 md:text-lg">
            We take the time to understand your vision, market, and audience,
            which allows us to create tailored solutions that set you apart from
            the competition. With expertise across branding, digital design, and
            print services, we’re a one-stop shop for all your design needs.
            From creating visually stunning logos to delivering professional
            print materials and user-friendly digital designs, we ensure
            consistency and excellence across all platforms. We are committed to
            quality, paying attention to even the smallest details, while
            delivering projects on time and within budget.
          </p>
        </div>
        <div>
          <p class="mb-4 text-base text-gray-700 md:text-lg">
            What sets us apart is our dedication to customer satisfaction. We
            value collaboration, keep communication transparent, and involve you
            in every step of the creative process to ensure that the final
            product exceeds expectations. With a track record of success and a
            portfolio that speaks for itself, we are confident in our ability to
            elevate your brand through exceptional design.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
