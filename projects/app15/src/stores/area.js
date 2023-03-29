import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useAreaStore = defineStore('area', () => {
  const firstName = ref("")
  const lastName = ref("")
  const zipcode = ref("")
  const street = ref("")
  const city = ref("")
  const state = ref("")

  return { firstName, lastName, zipcode, state, street, city}
})
