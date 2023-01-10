<template>
  <div class="lg:grid lg:grid-cols-12 lg:gap-x-8">
    <div class="w-full mb-8 lg:mb-0 lg:col-span-9">
      <div v-html="content" />
    </div>
    <RegionsRightRail />
  </div>
</template>

<script setup>
defineProps({
  content: String
})
</script>
