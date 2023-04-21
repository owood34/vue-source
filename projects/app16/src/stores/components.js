import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useComponentStore = defineStore('component', () => {

  const list = ref({})
  list.value[0] = "I"
  list.value[1] = "II"
  list.value[2] = "III"
  list.value[3] = "IV"
  list.value[4] = "V"
  list.value[5] = "VI"

  return { list }
})
