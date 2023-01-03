<template>
  <elementsHeadline
    title="Ashrae Bi-State Chapter"
    subtitle="The American Society of Heating, Refrigerating and Air-Conditioning Engineers"
  />
  <RegionsContainer>
    <RegionsContent :content="page.body[0].value" />
  </RegionsContainer>
</template>

<script setup>
const config = useRuntimeConfig()
const { data: page } = await useFetch(
  `${config.public.apiBase}/home?_format=json`,
  { pick: ['title', 'body'] }
)
</script>
