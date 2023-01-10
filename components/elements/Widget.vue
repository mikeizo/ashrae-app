<template>
  <div class="block bg-gray-100 p-5">
    <h3 class="mb-2 text-2xl font-bold leading-tight text-center text-lime-500">
      {{ title }}
    </h3>
    <slot />
  </div>
</template>

<script setup>
defineProps({
  title: String
})
</script>
