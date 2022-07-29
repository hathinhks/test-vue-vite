<template>
  <div class="bg-primary-500 px-10 py-7">
    <PageHeader />
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import PageHeader from '@/components/PageHeader.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  components: { PageHeader }
})
</script>
