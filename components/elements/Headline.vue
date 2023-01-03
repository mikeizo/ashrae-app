<template>
  <div class="header w-full py-5 bg-blue-600">
    <h1 class="text-5xl font-bold leading-tight text-center text-white">
      {{ title }}
    </h1>
    <h2
      v-if="subtitle"
      class="mt-2 text-2xl font-light leading-tight text-center text-white"
    >
      {{ subtitle }}
    </h2>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  subtitle: String
})
</script>
