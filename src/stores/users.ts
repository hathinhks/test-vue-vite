import { User } from '@/models/User'
import TestService from '@/services/TestService'
import { acceptHMRUpdate, defineStore } from 'pinia'
import { Ref, ref } from 'vue'

export const useUsersStore = defineStore('users', () => {
  const users: Ref<User[]> = ref([])

  const getUsers = async () => {
    const response = await TestService.getUsers()
    users.value = response as unknown as User[]
  }

  return { users, getUsers }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUsersStore, import.meta.hot))
}