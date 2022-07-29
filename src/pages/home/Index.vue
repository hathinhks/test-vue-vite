<template>
  <div class="pt-20 flex items-center flex-col">
    <h1 class="text-[48px] font-[600]">Welcome to Activated Operation</h1>
    <h3 class="mt-8 text-[24px] w-1/2 text-center">
      Don't leave your operations to chance. Meet Avenue, a business‑event
      monitoring and incident response tool
    </h3>
    <ActionButton
      :title="'Get access'"
      class="mt-8 px-6 py-4 bg-success-500 text-black font-bold"
      @click="getUsers"
    />
    <div v-for="user in users" :key="user.id">
      {{ user.name }}
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import ActionButton from '@/components/ActionButton.vue'
import { useUsersStore } from '@/stores/users'

export default defineComponent({
  name: 'HomePage',
  components: { ActionButton },
  setup() {
    const usersStore = useUsersStore()

    return {
      users: computed(() => usersStore.users),
      getUsers: usersStore.getUsers
    }
  }
})
</script>
