<template>
  <button
    class="rounded-[6px] hover:opacity-90 flex items-center justify-center"
  >
    {{ title }}
  </button>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ActionButton',
  props: {
    title: { type: String, required: true }
  }
})
</script>
