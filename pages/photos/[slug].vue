<template>
  <elementsHeadline :title="data.title[0].value" />
  <RegionsContainer>
    <div class="grid lg:grid-cols-4 md:grid-cols-3 gap-5">
      <div
        v-for="(photos, index) in imgThumbs"
        :key="index"
        class="text-center"
      >
        <a @click="onShow(index)" class="cursor-pointer">
          <img
            :src="photos"
            class="object-cover h-64 w-96 rounded-lg border border-gray-100"
          />
        </a>
      </div>
    </div>
  </RegionsContainer>
  <ClientOnly>
    <VueEasyLightbox
      :visible="visibleRef"
      :imgs="imgsRef"
      :index="indexRef"
      :toolbar="{}"
      moveDisabled="true"
      @hide="onHide"
    >
      <template v-slot:toolbar="{}" />
    </VueEasyLightbox>
  </ClientOnly>
</template>

<script setup>
const config = useRuntimeConfig()
const route = useRoute()
const visibleRef = ref(false)
const imgsRef = ref([])
const imgThumbs = ref([])
const indexRef = ref(0)

const { data } = await useFetch(
  `${config.public.apiBase}photos/${route.params.slug}?_format=json`
)

const onHide = () => (visibleRef.value = false)

const onShow = (id) => {
  visibleRef.value = true
  indexRef.value = id
}

// Format images object
data.value.field_photos.forEach((element) => {
  let url = element.url
  let search = 'sites/default/files/'
  let position = url.indexOf(search) + search.length

  imgsRef.value.push(url)
  imgThumbs.value.push(
    [
      url.slice(0, position),
      'styles/thumbnail/public/',
      url.slice(position)
    ].join('')
  )
})
</script>
