<template>
  <div class="font-sans text-lg lg:text-base leading-normal tracking-normal">
    <RegionsHeader />
    <slot />
    <RegionsFooter />
  </div>
</template>

<script setup>
useHead({
  title: 'My App Title',
  // or, instead:
  // titleTemplate: (title) => `My App - ${title}`,
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  charset: 'utf-8',
  meta: [{ name: 'description', content: 'My amazing site.' }],
  bodyAttrs: {
    class: 'bg-gray-100'
  }
})
</script>
