<template>
  <elementsHeadline
    title="Ashrae Bi-State Chapter"
    subtitle="The American Society of Heating, Refrigerating and Air-Conditioning Engineers"
  />
  <RegionsContainer>
    <RegionsContent :content="data" />
  </RegionsContainer>
</template>

<script setup>
import page from '~/assets/api/home.json'

const data = page.body[0].value
// const config = useRuntimeConfig()
// const { data: page } = await useFetch(
//   `${config.public.apiBase}/home?_format=json`,
//   { pick: ['title', 'body'] }
// )
</script>
