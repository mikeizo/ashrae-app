<template>
  <elementsHeadline v-if="page" :title="page.title[0].value" />
  <RegionsContainer>
    <RegionsContent v-if="page" :content="page.body[0].value" />
  </RegionsContainer>
</template>

<script setup>
import history from '~/assets/api/history.json'
import officers from '~/assets/api/officers.json'

const config = useRuntimeConfig()
const route = useRoute()

let page = null

if (route.params.slug === 'history') {
  page = history
} else if (route.params.slug === 'officers') {
  page = officers
}

// const { data: page } = await useFetch(
//   `${config.public.apiBase}${route.params.slug}?_format=json`,
//   { pick: ['title', 'body'] }
// )
</script>
