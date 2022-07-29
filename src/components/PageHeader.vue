<template>
  <div class="flex items-center">
    <router-link to="/" class="flex items-center gap-2 text-[32px]">
      <img src="@/assets/vue.svg" />
      Vue
    </router-link>
    <div class="flex-1 flex justify-center gap-12">
      <router-link to="/careers">Careers</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/blog">Blog</router-link>
    </div>
    <div class="flex gap-5 text-black font-bold text-[14px]">
      <ActionButton :title="'Sign in'" class="bg-neutral-500 px-4 py-3" />
      <ActionButton
        :title="'Request Access'"
        class="bg-success-500 px-4 py-3"
      />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import ActionButton from './ActionButton.vue'

export default defineComponent({
  components: { ActionButton },
  name: 'PageHeader',
  setup() {
    return {}
  }
})
</script>
