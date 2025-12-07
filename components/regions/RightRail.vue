<template>
  <div class="w-full flex flex-col space-y-4 lg:col-span-3">
    <elementsWidget title="Upcoming Events">
      <div>
        <span class="font-bold text-gray-700">Date:</span>
        12/12/28
      </div>
      <div>
        <span class="font-bold text-gray-700">Main Presentation:</span> <br />
          Test Event
      </div>
      <div>
        <span class="font-bold text-gray-700">Tech Session:</span> <br />
        Test Session
      </div>
    </elementsWidget>
    <elementsWidget title="Follow Us">
      <div class="grid gap-4 grid-cols-3">
        <a href="https://www.facebook.com/ashraebistate/" target="_blank">
          <img src="~/assets/img/social-facebook.svg" alt="facebook" />
        </a>
        <a href="https://twitter.com/bistate" target="_blank">
          <img src="~/assets/img/social-twitter.svg" alt="twitter" />
        </a>
        <a href="https://www.linkedin.com/in/ashraebistate" target="_blank">
          <img src="~/assets/img/social-linkedin.svg" alt="linkedin" />
        </a>
      </div>
    </elementsWidget>
    <elementsWidget title="Newsletter Signup">
      <form
        action="http://visitor.constantcontact.com/d.jsp"
        method="post"
        name="ccoptin"
        target="_blank"
      >
        <p class="text-sm">Get up to date emails on Ashrae Bi-State</p>
        <div class="text-center">
          <input
            class="block w-full rounded-md border-gray-300 p-2 focus:border-blue-500 focus:ring-blue-500"
            name="ea"
            placeholder="Your Email"
            type="text"
            value=""
          />
          <input name="m" type="hidden" value="1102756958975" />
          <input name="p" type="hidden" value="oi" />
          <input
            class="rounded-md border bg-blue-600 py-2 px-5 mt-2 font-medium text-white hover:bg-blue-700"
            name="go"
            type="submit"
            value="Sign Up"
          />
        </div>
      </form>
    </elementsWidget>
    <elementsWidget title="Scholarship Form">
      <a>
        Evaluation Form
      </a>
      <br />
      <a>
        Scholarship Application
      </a>
    </elementsWidget>
  </div>
</template>

<script setup>
const config = useRuntimeConfig()
const baseUrl = config.public.apiBase
// const { data: event } = await useFetch(`${baseUrl}events/upcoming?_format=json`)

function formatDate(rawDate) {
  const date = new Date(rawDate)
  date.setDate(date.getDate() + 1)

  return `${date.toLocaleString('default', {
    month: 'short'
  })} ${date.getDate()}, ${date.getFullYear()}`
}
</script>
