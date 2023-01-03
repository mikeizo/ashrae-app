<template>
  <a
    v-for="(file, index) in files" :key="index"
    :href="`${config.public.apiBase}${file}`"
    class="inline-block px-1"
    target="_blank"
  >
    <img height="25" width="25" src="~/assets/img/pdf.svg">
  </a>
</template>

<script setup>
  const config = useRuntimeConfig()
  const props = defineProps({
    fieldDownload: String
  })

  const files = computed(() => {
    return props.fieldDownload.split(',').filter(str => str)
  })
</script>
