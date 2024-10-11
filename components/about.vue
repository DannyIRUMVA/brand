<template>
  <div
    class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
  >
    <div class="grid gap-10 lg:grid-cols-2">
      <div class="lg:pr-10">
        <a href="/" aria-label="Go Home" title="Logo" class="inline-block mb-5">
          <div
            class="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50"
          >
            <svg
              class="w-10 h-10 text-deep-purple-accent-400"
              stroke="currentColor"
              viewBox="0 0 52 52"
            >
              <polygon
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              ></polygon>
            </svg>
          </div>
        </a>
        <h5 class="mb-4 text-4xl font-extrabold leading-none">
          The quick, brown fox<br class="hidden md:block" />
          jumps over
          <span class="inline-block text-deep-purple-accent-400"
            >a lazy dog</span
          >
        </h5>
        <p class="mb-6 text-gray-900">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          explicabo. Sed ut perspiciatis unde omnis iste natus error sit
          voluptatem totam rem aperiam, eaque ipsa quae explicabo.
        </p>
        <hr class="mb-5 border-gray-300" />
        <div class="flex items-center space-x-4">
          <a
            href="/"
            class="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" class="h-5">
              <path
                d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z"
              ></path>
            </svg>
          </a>
          <a
            href="/"
            class="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
          >
            <svg viewBox="0 0 30 30" fill="currentColor" class="h-6">
              <circle cx="15" cy="15" r="4"></circle>
              <path
                d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z"
              ></path>
            </svg>
          </a>
          <a
            href="/"
            class="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" class="h-5">
              <path
                d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z"
              ></path>
            </svg>
          </a>
          <a
            href="/"
            class="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" class="h-6">
              <path
                d="M23.8,7.2c0,0-0.2-1.7-1-2.4c-0.9-1-1.9-1-2.4-1C17,3.6,12,3.6,12,3.6h0c0,0-5,0-8.4,0.2 c-0.5,0.1-1.5,0.1-2.4,1c-0.7,0.7-1,2.4-1,2.4S0,9.1,0,11.1v1.8c0,1.9,0.2,3.9,0.2,3.9s0.2,1.7,1,2.4c0.9,1,2.1,0.9,2.6,1 c1.9,0.2,8.2,0.2,8.2,0.2s5,0,8.4-0.3c0.5-0.1,1.5-0.1,2.4-1c0.7-0.7,1-2.4,1-2.4s0.2-1.9,0.2-3.9v-1.8C24,9.1,23.8,7.2,23.8,7.2z M9.5,15.1l0-6.7l6.5,3.4L9.5,15.1z"
              ></path>
            </svg>
          </a>
        </div>
      </div>
      <div>
        <img
          class="object-cover w-full h-56 rounded shadow-lg sm:h-96"
          src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
          alt=""
        />
      </div>
    </div>
  </div>
  <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
    <div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
      <div>
        <p class="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
          Brand new
        </p>
      </div>
      <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
        <span class="relative inline-block">
          <svg viewBox="0 0 52 24" fill="currentColor" class="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block">
            <defs>
              <pattern id="d9d7687a-355f-4502-8ec4-7945db034688" x="0" y="0" width=".135" height=".30">
                <circle cx="1" cy="1" r=".7"></circle>
              </pattern>
            </defs>
            <rect fill="url(#d9d7687a-355f-4502-8ec4-7945db034688)" width="52" height="24"></rect>
          </svg>
          <span class="relative">The</span>
        </span>
        quick, brown fox jumps over a lazy dog
      </h2>
      <p class="text-base text-gray-700 md:text-lg">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam, eaque ipsa quae.
      </p>
    </div>
    <div class="grid gap-5 mb-8 md:grid-cols-2 lg:grid-cols-3">
      <div class="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
        <div class="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
          <svg class="w-10 h-10 text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
            <polygon stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
          </svg>
        </div>
        <h6 class="mb-2 font-semibold leading-5">The doctor said</h6>
        <p class="text-sm text-gray-900">
          Baseball ipsum dolor sit amet cellar rubber win hack tossed. Slugging catcher slide bench league, left fielder nubber.
        </p>
      </div>
      <div class="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
        <div class="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
          <svg class="w-10 h-10 text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
            <polygon stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
          </svg>
        </div>
        <h6 class="mb-2 font-semibold leading-5">That is the true</h6>
        <p class="text-sm text-gray-900">
          We meet at one of those defining moments - a moment when our nation is at war, our economy is in turmoil, and the American promise has been threatened once more.
        </p>
      </div>
      <div class="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
        <div class="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
          <svg class="w-10 h-10 text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
            <polygon stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
          </svg>
        </div>
        <h6 class="mb-2 font-semibold leading-5">Those options</h6>
        <p class="text-sm text-gray-900">
          Strategic high-level 30,000 ft view. Drill down re-inventing the wheel at the end of the day but curate imagineer, or to be inspired is to become creative.
        </p>
      </div>
      <div class="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
        <div class="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
          <svg class="w-10 h-10 text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
            <polygon stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
          </svg>
        </div>
        <h6 class="mb-2 font-semibold leading-5">Swearem ipsum</h6>
        <p class="text-sm text-gray-900">
          Aliquam scelerisque accumsan nisl, a mattis eros vestibulum et. Vestibulum placerat purus ut nibh aliquam fringilla. Aenean et tortor diam, id tempor elit.
        </p>
      </div>
      <div class="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
        <div class="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
          <svg class="w-10 h-10 text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
            <polygon stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
          </svg>
        </div>
        <h6 class="mb-2 font-semibold leading-5">Webtwo ipsum</h6>
        <p class="text-sm text-gray-900">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam, eaque ipsa quae. Sed ut perspiciatis unde omnis.
        </p>
      </div>
      <div class="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
        <div class="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
          <svg class="w-10 h-10 text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
            <polygon stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
          </svg>
        </div>
        <h6 class="mb-2 font-semibold leading-5">Lookout flogging</h6>
        <p class="text-sm text-gray-900">
          Flatland! Hypatia. Galaxies Orion's sword globular star cluster? Light years quasar as a patch of light gathered by gravity Vangelis radio telescope.
        </p>
      </div>
    </div>
    <div class="text-center">
      <a
        href="/"
        class="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
      >
        Learn more
      </a>
    </div>
  </div>
  <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
    <div class="flex flex-col bg-white border rounded shadow-sm md:justify-center lg:flex-row">
      <div class="flex flex-col justify-between p-5 border-b sm:p-10 lg:border-b-0 lg:border-r lg:w-1/2">
        <div>
          <p class="mb-2 text-xs font-semibold tracking-wide uppercase">
            New History
          </p>
          <h5 class="max-w-md mb-6 text-3xl font-extrabold leading-none sm:text-4xl">
            The quick, brown fox jumps over a lazy dog
          </h5>
          <p class="mb-6 text-base text-gray-700 md:text-lg sm:mb-8">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae. explicabo.
          </p>
        </div>
        <div class="flex items-center">
          <button
            type="submit"
            class="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
          >
            Get started
          </button>
          <a href="/" aria-label="" class="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800">Learn more</a>
        </div>
      </div>
      <div class="flex flex-col justify-between p-5 sm:p-10 lg:w-1/2">
        <div>
          <p class="mb-2 text-xs font-semibold tracking-wide uppercase">
            New History
          </p>
          <h5 class="max-w-md mb-6 text-3xl font-extrabold leading-none sm:text-4xl">
            The first mate and his Skipper too will do
          </h5>
          <p class="mb-6 text-base text-gray-700 md:text-lg sm:mb-8">
            Disrupt inspire and think tank, social entrepreneur but preliminary thinking think tank compelling.
          </p>
        </div>
        <div class="flex items-center">
          <button
            type="submit"
            class="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
          >
            Get started
          </button>
          <a href="/" aria-label="" class="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800">Learn more</a>
        </div>
      </div>
    </div>
  </div>
</template>
