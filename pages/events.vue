<template>
  <elementsHeadline title="Events" />
  <RegionsContainer>
    <div class="overflow-x-auto">
      <table class="table-auto w-full">
        <thead class="border-b">
          <tr>
            <th class="text-bold text-left px-5">Date</th>
            <th class="text-bold text-left px-5">Tech Session</th>
            <th class="text-bold text-left px-5">Main Presentation</th>
            <th class="text-bold text-left px-5">PDH</th>
            <th class="text-bold text-left px-5">Theme</th>
            <th class="text-bold text-left px-5">Downloads</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(event, index) in data.rows" :key="index">
            <td v-html="event.field_date" class="px-5 whitespace-nowrap" />
            <td v-html="event.field_tech_session" class="px-5" />
            <td v-html="event.field_main_presentation" class="px-5" />
            <td class="px-5 whitespace-nowrap">{{ event.field_pdh }}</td>
            <td class="px-5 whitespace-nowrap">{{ event.field_theme }}</td>
            <td class="px-5 whitespace-nowrap text-center">
              <ImgPdfIcon :fieldDownload="event.field_download" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <elementsPagination :pager="data.pager" pageName="events" />
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

const { data } = await useAsyncData('page', () =>
  $fetch(`${config.public.apiBase}events?_format=json${query}`)
)
</script>
