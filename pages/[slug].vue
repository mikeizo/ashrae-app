<template>
  <elementsHeadline v-if="page" :title="page.title[0].value" />
  <RegionsContainer>
    <RegionsContent v-if="page" :content="page.body[0].value" />
  </RegionsContainer>
</template>

<script setup>
const config = useRuntimeConfig()
const route = useRoute()
const { data: page } = await useFetch(
  `${config.public.apiBase}${route.params.slug}?_format=json`,
  { pick: ['title', 'body'] }
)
</script>
