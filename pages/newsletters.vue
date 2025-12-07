<template>
  <elementsHeadline title="Newsletters" />
  <RegionsContainer>
    <div class="lg:grid lg:grid-cols-12 lg:gap-x-8">
      <div class="w-full lg:col-span-9">
        <div class="overflow-x-auto">
          <table class="table-auto w-full">
            <thead class="border-b">
              <tr>
                <th class="text-bold text-left px-5">Newsletter Month</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(newsletter, index) in data.rows" :key="index">
                <td class="px-5 whitespace-nowrap">
                  <a
                    class="hover:text-lime-500"
                    target="_blank"
                    v-html="newsletter.field_newsletter_date"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <elementsPagination :pager="data.pager" pageName="newsletters" />
      </div>
      <RegionsRightRail />
    </div>
  </RegionsContainer>
</template>
<script setup>
import data from '~/assets/api/newsletters.json'

const config = useRuntimeConfig()
const route = useRoute()
let { page } = route.query
let query = ''
if (page) {
  query = `&page=${page}`
}
// const { data } = await useAsyncData('page', () =>
//   $fetch(`${config.public.apiBase}newsletters?_format=json${query}`)
// )
</script>
