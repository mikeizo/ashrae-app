<template>
  <nav id="header" class="w-full px-8 py-4 z-10 top-0 bg-white shadow-md">
    <div
      class="lg:max-w-6xl mx-auto flex flex-wrap items-center justify-between"
    >
      <div class="flex items-center">
        <a
          class="text-lime-500 text-base no-underline hover:no-underline font-extrabold"
          href="/"
        >
          <span class="sr-only text-3xl">Ashrae Bi-State</span>
          <ImgLogo />
        </a>
      </div>

      <div class="block lg:hidden">
        <button
          id="nav-toggle"
          class="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-lime-500 hover:border-blue-500 appearance-none focus:outline-none"
          @click="toggle()"
        >
          <svg
            class="fill-current h-3 w-3"
            viewBox="0 0 20 20"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>

      <div
        class="w-full flex-grow lg:flex lg:items-center lg:w-auto mt-2 lg:mt-0 md:bg-transparent z-20"
        id="nav-content"
        :class="menuToggle ? 'hidden' : ''"
      >
        <ul class="list-reset lg:flex justify-end flex-1 items-center">
          <li class="text-center border-b lg:border-0 border-blue-100">
            <a
              class="block text-gray-600 no-underline hover:text-lime-500 hover:text-underline py-2 px-4"
              href="/"
              >Home</a
            >
          </li>
          <li class="text-center border-b lg:border-0 border-blue-100">
            <a
              class="block text-gray-600 no-underline hover:text-lime-500 hover:text-underline py-2 px-4"
              href="/history"
              >History</a
            >
          </li>
          <li class="text-center border-b lg:border-0 border-blue-100">
            <a
              class="block text-gray-600 no-underline hover:text-lime-500 hover:text-underline py-2 px-4"
              href="/officers"
              >Officers</a
            >
          </li>
          <li class="text-center border-b lg:border-0 border-blue-100">
            <a
              class="block text-gray-600 no-underline hover:text-lime-500 hover:text-underline py-2 px-4"
              href="/events"
              >Events</a
            >
          </li>
          <li class="text-center border-b lg:border-0 border-blue-100">
            <a
              class="block text-gray-600 no-underline hover:text-lime-500 hover:text-underline py-2 px-4"
              href="/newsletters"
              >Newsletters</a
            >
          </li>
          <!-- <li class="text-center border-b lg:border-0 border-blue-100">
            <a
              class="block text-gray-600 no-underline hover:text-lime-500 hover:text-underline py-2 px-4"
              href="/photos"
              >Photos</a
            >
          </li> -->
          <li class="text-center">
            <a
              class="block text-gray-600 no-underline hover:text-lime-500 hover:text-underline py-2 px-4"
              href="/contact"
              >Contact</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
let menuToggle = ref(true)

function toggle() {
  menuToggle.value = !menuToggle.value
}
</script>
