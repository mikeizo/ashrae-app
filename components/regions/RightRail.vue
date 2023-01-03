<template>
  <div class="w-full lg:col-span-3">
    <elementsWidget v-if="event[0]" title="Upcoming Events">
      <div>
        <span class="font-bold text-gray-700">Date:</span>
        {{ formatDate(event[0].field_date) }}
      </div>
      <div>
        <span class="font-bold text-gray-700">Main Presentation:</span> <br />{{
          event[0].field_main_presentation
        }}
      </div>
      <div>
        <span class="font-bold text-gray-700">Tech Session:</span> <br />{{
          event[0].field_tech_session
        }}
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
      <a href="http://www.ashraebistate.org/files/Applicant_Evaluation_Form.doc"
        >Evaluation Form</a
      ><br />
      <a href="http://www.ashraebistate.org/files/Scholarship_Application.doc"
        >Scholarship Application</a
      >
    </elementsWidget>
  </div>
</template>

<script setup>
const config = useRuntimeConfig()
const { data: event } = await useFetch(
  `${config.public.apiBase}events/upcoming?_format=json`
)

function formatDate(rawDate) {
  const date = new Date(rawDate)
  date.setDate(date.getDate() + 1)

  return `${date.toLocaleString('default', {
    month: 'short'
  })} ${date.getDate()}, ${date.getFullYear()}`
}
</script>
