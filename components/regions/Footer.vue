<template>
  <footer>
    <div class="container w-full mx-auto py-4">
      <p class="text-gray-500 text-sm text-center">
        Copyright ©{{ year }}, American Society of Heating, Refrigerating and
        Air-Conditioning Engineers, Inc.
      </p>
    </div>
  </footer>
</template>

<script setup>
const dat = new Date()
const year = dat.getFullYear()
</script>
