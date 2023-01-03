<template>
  <elementsHeadline title="Contact Us" />
  <RegionsContainer>
    <div class="lg:grid lg:grid-cols-12 lg:gap-x-8">
      <div class="w-full lg:col-span-9">
        <Form
          @submit="submitForm"
          :validation-schema="schema"
          v-slot="{ errors }"
        >
          <div class="grid grid-cols-2 gap-6">
            <!--
              <input type="text" name="bename" class="hidden"/>
            -->
            <div class="">
              <label for="fullName" class="block">Name</label>
              <Field
                :class="{ 'border-red-500 bg-red-100/50': errors.fullName }"
                type="text"
                v-model="formData.fullName"
                name="fullName"
                required
                class="block w-full px-3 py-1.5 text-base font-normal border border-solid border-gray-300 rounded transition ease-in-out focus:border-blue-600 focus:outline-none"
              />
              <div class="h-4">
                <small v-if="errors.fullName" class="text-red-500">{{
                  errors.fullName
                }}</small>
              </div>
            </div>
            <div class="">
              <label for="email" class="block">Email address</label>
              <Field
                :class="{ 'border-red-500 bg-red-100/50': errors.email }"
                type="text"
                v-model="formData.email"
                name="email"
                required
                class="block w-full px-3 py-1.5 text-base font-normal transition ease-in-out rounded border border-solid border-gray-300 focus:border-blue-600 focus:outline-none"
              />
              <div class="h-4">
                <small v-if="errors.email" class="text-red-500">{{
                  errors.email
                }}</small>
              </div>
            </div>
            <div class="col-span-2">
              <label for="email-address" class="block text-lg">Message</label>
              <textarea
                rows="3"
                v-model="formData.message"
                placeholder="Message"
                class="block w-full px-3 py-1.5 text-base font-normal rounded transition ease-in-out border border-solid border-gray-300 focus:border-blue-600 focus:outline-none"
              ></textarea>
            </div>

            <div class="col-span-2">
              <input
                type="submit"
                class="inline-flex justify-center rounded-md border border-transparent bg-blue-500 py-2 px-4 text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
              />
            </div>
          </div>
        </Form>
      </div>
      <RegionsRightRail />
    </div>
  </RegionsContainer>
</template>

<script setup>
import { object, string } from 'yup'

const formData = {}
const schema = object().shape({
  fullName: string()
    .required('Name is required')
    .min(3, 'Name must be at least 3 characters')
    .max(50, 'Name must be at most 50 characters'),
  email: string().email().required()
})

async function submitForm() {
  await $fetch('/api/email', {
    method: 'POST',
    body: formData
  })
}
</script>

<style scoped>
.has-error {
  border: 1px solid #ff0000;
  background-color: #ffc5c5;
}
</style>
