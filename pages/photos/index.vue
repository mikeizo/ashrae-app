<template>
  <elementsHeadline title="Photos" />
  <RegionsContainer>
    <div class="grid lg:grid-cols-4 md:grid-cols-3 gap-5">
      <div
        v-for="(photos, index) in data.rows"
        :key="index"
        class="text-center"
      >
        <a :href="photos.view_node">
          <img
            :src="`http://dev.ashrae${photos.field_photos}`"
            class="object-cover h-64 w-96 rounded-lg border border-gray-100"
          />
          <div class="mt-2">{{ photos.title }}</div>
        </a>
      </div>
    </div>
    <Pagination :pager="data.pager" pageName="photos" />
  </RegionsContainer>
</template>

<script setup>
const config = useRuntimeConfig()
const route = useRoute()
let { page } = route.query
let query = ''
if (page) {
  query = `&page=${page}`
}
const { data } = await useFetch(
  `${config.public.apiBase}photos?_format=json${query}`,
  { pick: ['rows', 'pager'] }
)
</script>
