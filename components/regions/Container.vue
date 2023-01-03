<template>
  <div
    :class="classes"
    class="container lg:max-w-6xl mx-auto p-8 bg-white rounded-b shadow"
  >
    <slot />
  </div>
</template>

<script setup>
defineProps({
  classes: String
})
</script>
