<script setup></script>
<template>
  <div
    class="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8"
  >
    <div class="relative flex items-center justify-between">
      <div class="flex items-center">
        <a
          href="/"
          aria-label="Company"
          title="Company"
          class="inline-flex items-center mr-8"
        >
          <svg
            class="w-8 text-deep-purple-accent-400"
            viewBox="0 0 24 24"
            stroke-linejoin="round"
            stroke-width="2"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke="currentColor"
            fill="none"
          >
            <rect x="3" y="1" width="7" height="12"></rect>
            <rect x="3" y="17" width="7" height="6"></rect>
            <rect x="14" y="1" width="7" height="6"></rect>
            <rect x="14" y="11" width="7" height="12"></rect>
          </svg>
          <span
            class="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase"
            >Company</span
          >
        </a>
        <ul class="flex items-center hidden space-x-8 lg:flex">
          <li>
            <a
              href="/"
              aria-label="Our product"
              title="Our product"
              class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
              >Product</a
            >
          </li>
          <li>
            <a
              href="/"
              aria-label="Our product"
              title="Our product"
              class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
              >Features</a
            >
          </li>
          <li>
            <a
              href="/"
              aria-label="Product pricing"
              title="Product pricing"
              class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
              >Pricing</a
            >
          </li>
          <li>
            <a
              href="/"
              aria-label="About us"
              title="About us"
              class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
              >About us</a
            >
          </li>
        </ul>
      </div>
      <ul class="flex items-center hidden space-x-8 lg:flex">
        <li>
          <a
            href="/"
            aria-label="Sign in"
            title="Sign in"
            class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
            >Sign in</a
          >
        </li>
        <li>
          <a
            href="/"
            class="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
            aria-label="Sign up"
            title="Sign up"
          >
            Sign up
          </a>
        </li>
      </ul>
      <div class="lg:hidden">
        <button
          aria-label="Open Menu"
          title="Open Menu"
          class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
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
          <div class="p-5 bg-white border rounded shadow-sm">
            <div class="flex items-center justify-between mb-4">
              <div>
                <a
                  href="/"
                  aria-label="Company"
                  title="Company"
                  class="inline-flex items-center"
                >
                  <svg
                    class="w-8 text-deep-purple-accent-400"
                    viewBox="0 0 24 24"
                    stroke-linejoin="round"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-miterlimit="10"
                    stroke="currentColor"
                    fill="none"
                  >
                    <rect x="3" y="1" width="7" height="12"></rect>
                    <rect x="3" y="17" width="7" height="6"></rect>
                    <rect x="14" y="1" width="7" height="6"></rect>
                    <rect x="14" y="11" width="7" height="12"></rect>
                  </svg>
                  <span
                    class="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase"
                    >Company</span
                  >
                </a>
              </div>
              <div>
                <button
                  aria-label="Close Menu"
                  title="Close Menu"
                  class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                  @click="isMenuOpen = false"
                >
                  <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
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
                    class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                    >Product</a
                  >
                </li>
                <li>
                  <a
                    href="/"
                    aria-label="Our product"
                    title="Our product"
                    class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                    >Features</a
                  >
                </li>
                <li>
                  <a
                    href="/"
                    aria-label="Product pricing"
                    title="Product pricing"
                    class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                    >Pricing</a
                  >
                </li>
                <li>
                  <a
                    href="/"
                    aria-label="About us"
                    title="About us"
                    class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                    >About us</a
                  >
                </li>
                <li>
                  <a
                    href="/"
                    aria-label="Sign in"
                    title="Sign in"
                    class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                    >Sign in</a
                  >
                </li>
                <li>
                  <a
                    href="/"
                    class="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                    aria-label="Sign up"
                    title="Sign up"
                  >
                    Sign up
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- //section -->
  <div
    class="relative px-4 pt-16 mx-auto lg:py-32 md:px-8 xl:px-20 sm:max-w-xl md:max-w-full"
  >
    <div class="max-w-xl mx-auto lg:max-w-screen-xl">
      <div class="mb-16 lg:max-w-lg lg:mb-0">
        <div class="max-w-xl mb-6">
          <div>
            <p
              class="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400"
            >
              Brand new
            </p>
          </div>
          <h2
            class="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none"
          >
            The quick, brown fox<br class="hidden md:block" />
            jumps over
            <span class="inline-block text-deep-purple-accent-400"
              >a lazy dog</span
            >
          </h2>
          <p class="text-base text-gray-700 md:text-lg">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae. explicabo.
          </p>
        </div>
        <div class="flex items-center">
          <a
            href="/"
            class="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
          >
            Get started
          </a>
          <a
            href="/"
            aria-label=""
            class="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >Learn more</a
          >
        </div>
      </div>
    </div>
    <div
      class="flex justify-center h-full overflow-hidden lg:w-2/3 xl:w-1/2 lg:absolute lg:justify-start lg:bottom-0 lg:right-0 lg:items-end"
    >
      <img
        src="https://kitwind.io/assets/kometa/full-browser.png"
        class="object-cover object-top w-full h-64 max-w-xl -mb-16 rounded shadow-2xl lg:ml-64 xl:ml-8 lg:-mb-24 xl:-mb-28 lg:h-auto lg:max-w-screen-md"
        alt=""
      />
    </div>
  </div>

  <div
    class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
  >
    <div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
      <div>
        <p
          class="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400"
        >
          Brand new
        </p>
      </div>
      <h2
        class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto"
      >
        <span class="relative inline-block">
          <svg
            viewBox="0 0 52 24"
            fill="currentColor"
            class="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
          >
            <defs>
              <pattern
                id="db164e35-2a0e-4c0f-ab05-f14edc6d4d30"
                x="0"
                y="0"
                width=".135"
                height=".30"
              >
                <circle cx="1" cy="1" r=".7"></circle>
              </pattern>
            </defs>
            <rect
              fill="url(#db164e35-2a0e-4c0f-ab05-f14edc6d4d30)"
              width="52"
              height="24"
            ></rect>
          </svg>
          <span class="relative">The</span>
        </span>
        quick, brown fox jumps over a lazy dog
      </h2>
      <p class="text-base text-gray-700 md:text-lg">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque rem aperiam, eaque ipsa quae.
      </p>
    </div>
    <div
      class="grid max-w-sm gap-5 mb-8 lg:grid-cols-3 sm:mx-auto lg:max-w-full"
    >
      <div
        class="px-10 py-20 text-center border rounded lg:px-5 lg:py-10 xl:py-20"
      >
        <p
          class="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase"
        >
          20 Nov 2020
        </p>
        <a
          href="/"
          class="inline-block max-w-xs mx-auto mb-3 text-2xl font-extrabold leading-7 transition-colors duration-200 hover:text-deep-purple-accent-400"
          aria-label="Read article"
          title="Nori grape silver beet broccoli kombu beet"
        >
          Nori grape silver beet broccoli kombu beet
        </a>
        <p class="max-w-xs mx-auto mb-2 text-gray-700">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque.
        </p>
        <a
          href="/"
          aria-label=""
          class="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
          >Read more</a
        >
      </div>
      <div
        class="px-10 py-20 text-center border rounded lg:px-5 lg:py-10 xl:py-20"
      >
        <p
          class="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase"
        >
          20 Nov 2020
        </p>
        <a
          href="/"
          class="inline-block max-w-xs mx-auto mb-3 text-2xl font-extrabold leading-7 transition-colors duration-200 hover:text-deep-purple-accent-400"
          aria-label="Read article"
          title="Well, the way they make shows is, they make one"
        >
          Well, the way they make shows is, they make one
        </a>
        <p class="max-w-xs mx-auto mb-2 text-gray-700">
          Some pilots get picked and become television programs. Some don't,
          become nothing.
        </p>
        <a
          href="/"
          aria-label=""
          class="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
          >Read more</a
        >
      </div>
      <div
        class="px-10 py-20 text-center border rounded lg:px-5 lg:py-10 xl:py-20"
      >
        <p
          class="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase"
        >
          20 Nov 2020
        </p>
        <a
          href="/"
          class="inline-block max-w-xs mx-auto mb-3 text-2xl font-extrabold leading-7 transition-colors duration-200 hover:text-deep-purple-accent-400"
          aria-label="Read article"
          title="Pommy ipsum smeg head whizz morris himer due"
        >
          Pommy ipsum smeg head whizz morris himer due
        </a>
        <p class="max-w-xs mx-auto mb-2 text-gray-700">
          Taking the mick middle class bog roll bow ties are cool posh nosh off
          t'shop, stew and dumps.
        </p>
        <a
          href="/"
          aria-label=""
          class="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
          >Read more</a
        >
      </div>
    </div>
  </div>

  <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
    <div class="grid gap-10 row-gap-8 lg:grid-cols-5">
      <div class="lg:col-span-2">
        <p class="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase">
          20 Nov 2020
        </p>
        <div class="mb-3">
          <a href="/" aria-label="Article" class="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-400">
            <p class="font-sans text-xl font-extrabold leading-none tracking-tight lg:text-4xl xl:text-5xl">
              What it means when a man falls from outer space
            </p>
          </a>
        </div>
        <p class="mb-4 text-base text-gray-700 md:text-lg">
          Call it magical realism, call it realistic fantasy—call it whatever you want, but Arimah's playfully subversive style is wholly her own.
        </p>
        <div class="flex items-center">
          <a href="/" aria-label="Author" class="mr-3">
            <img alt="avatar" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260" class="object-cover w-10 h-10 rounded-full shadow-sm" />
          </a>
          <div>
            <a href="/" aria-label="Author" class="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400">Petru Vîrtos</a>
            <p class="text-sm font-medium leading-4 text-gray-600">Author</p>
          </div>
        </div>
      </div>
      <div class="flex flex-col space-y-8 lg:col-span-3">
        <div>
          <p class="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase">
            14 Jul 2020
          </p>
          <div class="mb-3">
            <a href="/" aria-label="Article" class="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-400">
              <p class="font-sans text-xl font-extrabold leading-none tracking-tight lg:text-2xl">
                Mascarpone cheese triangles taleggio
              </p>
            </a>
          </div>
          <p class="mb-4 text-base text-gray-700 md:text-lg">
            Brie cheese triangles cheesecake. Cauliflower cheese cheese and wine manchego bocconcini croque monsieur queso airedale brie.
          </p>
          <div class="flex items-center">
            <a href="/" aria-label="Author" class="mr-3">
              <img alt="avatar" src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260" class="object-cover w-10 h-10 rounded-full shadow-sm" />
            </a>
            <div>
              <a href="/" aria-label="Author" class="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400">Alex Stratulat</a>
              <p class="text-sm font-medium leading-4 text-gray-600">Author</p>
            </div>
          </div>
        </div>
        <div>
          <p class="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase">
            18 Mar 2020
          </p>
          <div class="mb-3">
            <a href="/" aria-label="Article" class="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-400">
              <p class="font-sans text-xl font-extrabold leading-none tracking-tight lg:text-2xl">
                The quick, brown fox jumps over a lazy dog
              </p>
            </a>
          </div>
          <p class="mb-4 text-base text-gray-700 md:text-lg">
            "A kitten, a nice little, sleek playful kitten, that I can play with, and teach, and feed--and feed--and feed!" I was not unprepared for this request, for I had noticed how his pets went on increasing in size.
          </p>
          <div class="flex items-center">
            <a href="/" aria-label="Author" class="mr-3">
              <img alt="avatar" src="https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260" class="object-cover w-10 h-10 rounded-full shadow-sm" />
            </a>
            <div>
              <a href="/" aria-label="Author" class="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400">Susie the Cat</a>
              <p class="text-sm font-medium leading-4 text-gray-600">Author</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
    <div class="grid gap-8 row-gap-5 lg:grid-cols-3">
      <div class="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
        <div class="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100"></div>
        <div class="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100"></div>
        <div class="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100"></div>
        <div class="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100"></div>
        <div class="relative p-5 bg-white rounded-sm">
          <div class="flex flex-col mb-2 lg:items-center lg:flex-row">
            <div class="flex items-center justify-center w-10 h-10 mb-4 mr-2 rounded-full bg-indigo-50 lg:mb-0">
              <svg class="w-8 h-8 text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
                <polygon stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
              </svg>
            </div>
            <h6 class="font-semibold leading-5">The quick, brown fox</h6>
          </div>
          <p class="mb-2 text-sm text-gray-900">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam.
          </p>
          <a href="/" aria-label="" class="inline-flex items-center text-sm font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800">Learn more</a>
        </div>
      </div>
      <div class="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
        <div class="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100"></div>
        <div class="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100"></div>
        <div class="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100"></div>
        <div class="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100"></div>
        <div class="relative p-5 bg-white rounded-sm">
          <div class="flex flex-col mb-2 lg:items-center lg:flex-row">
            <div class="flex items-center justify-center w-10 h-10 mb-4 mr-2 rounded-full bg-indigo-50 lg:mb-0">
              <svg class="w-8 h-8 text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
                <polygon stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
              </svg>
            </div>
            <h6 class="font-semibold leading-5">Smooth as an android</h6>
          </div>
          <p class="mb-2 text-sm text-gray-900">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam.
          </p>
          <a href="/" aria-label="" class="inline-flex items-center text-sm font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800">Learn more</a>
        </div>
      </div>
      <div class="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
        <div class="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100"></div>
        <div class="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100"></div>
        <div class="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100"></div>
        <div class="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100"></div>
        <div class="relative p-5 bg-white rounded-sm">
          <div class="flex flex-col mb-2 lg:items-center lg:flex-row">
            <div class="flex items-center justify-center w-10 h-10 mb-4 mr-2 rounded-full bg-indigo-50 lg:mb-0">
              <svg class="w-8 h-8 text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
                <polygon stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
              </svg>
            </div>
            <h6 class="font-semibold leading-5">This is about justice</h6>
          </div>
          <p class="mb-2 text-sm text-gray-900">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam.
          </p>
          <a href="/" aria-label="" class="inline-flex items-center text-sm font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800">Learn more</a>
        </div>
      </div>
    </div>
  </div>

  <!-- footer -->
  <div class="bg-gray-900">
    <div
      class="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8"
    >
      <div class="grid row-gap-10 mb-8 lg:grid-cols-6">
        <div
          class="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4"
        >
          <div>
            <p class="font-medium tracking-wide text-gray-300">Category</p>
            <ul class="mt-2 space-y-2">
              <li>
                <a
                  href="/"
                  class="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >News</a
                >
              </li>
              <li>
                <a
                  href="/"
                  class="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >World</a
                >
              </li>
              <li>
                <a
                  href="/"
                  class="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >Games</a
                >
              </li>
              <li>
                <a
                  href="/"
                  class="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >References</a
                >
              </li>
            </ul>
          </div>
          <div>
            <p class="font-medium tracking-wide text-gray-300">Apples</p>
            <ul class="mt-2 space-y-2">
              <li>
                <a
                  href="/"
                  class="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >Web</a
                >
              </li>
              <li>
                <a
                  href="/"
                  class="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >eCommerce</a
                >
              </li>
              <li>
                <a
                  href="/"
                  class="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >Business</a
                >
              </li>
              <li>
                <a
                  href="/"
                  class="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >Entertainment</a
                >
              </li>
              <li>
                <a
                  href="/"
                  class="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >Portfolio</a
                >
              </li>
            </ul>
          </div>
          <div>
            <p class="font-medium tracking-wide text-gray-300">Cherry</p>
            <ul class="mt-2 space-y-2">
              <li>
                <a
                  href="/"
                  class="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >Media</a
                >
              </li>
              <li>
                <a
                  href="/"
                  class="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >Brochure</a
                >
              </li>
              <li>
                <a
                  href="/"
                  class="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >Nonprofit</a
                >
              </li>
              <li>
                <a
                  href="/"
                  class="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >Educational</a
                >
              </li>
              <li>
                <a
                  href="/"
                  class="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >Projects</a
                >
              </li>
            </ul>
          </div>
          <div>
            <p class="font-medium tracking-wide text-gray-300">Business</p>
            <ul class="mt-2 space-y-2">
              <li>
                <a
                  href="/"
                  class="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >Infopreneur</a
                >
              </li>
              <li>
                <a
                  href="/"
                  class="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >Personal</a
                >
              </li>
              <li>
                <a
                  href="/"
                  class="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >Wiki</a
                >
              </li>
              <li>
                <a
                  href="/"
                  class="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >Forum</a
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="md:max-w-md lg:col-span-2">
          <span class="text-base font-medium tracking-wide text-gray-300"
            >Subscribe for updates</span
          >
          <form class="flex flex-col mt-4 md:flex-row">
            <input
              placeholder="Email"
              required=""
              type="text"
              class="flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
            />
            <button
              type="submit"
              class="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
            >
              Subscribe
            </button>
          </form>
          <p class="mt-4 text-sm text-gray-500">
            Bacon ipsum dolor amet short ribs pig sausage prosciuto chicken
            spare ribs salami.
          </p>
        </div>
      </div>
      <div
        class="flex flex-col justify-between pt-5 pb-10 border-t border-gray-800 sm:flex-row"
      >
        <p class="text-sm text-gray-500">
          © Copyright 2020 Lorem Inc. All rights reserved.
        </p>
        <div class="flex items-center mt-4 space-x-4 sm:mt-0">
          <a
            href="/"
            class="text-gray-500 transition-colors duration-300 hover:text-teal-accent-400"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" class="h-5">
              <path
                d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z"
              ></path>
            </svg>
          </a>
          <a
            href="/"
            class="text-gray-500 transition-colors duration-300 hover:text-teal-accent-400"
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
            class="text-gray-500 transition-colors duration-300 hover:text-teal-accent-400"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" class="h-5">
              <path
                d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<style></style>
