<script async setup>
  import { reactive, ref, onMounted } from 'vue'
  import { useRouter } from 'vue-router'
  import { useAreaStore } from '../stores/area.js'
  import { DataStore } from '../../public/DataStore.js'

  const json = reactive({})
  const values = ref([])
  const router = useRouter()
  json.value = await DataStore.getJsonFile('../default.json')
  Object.values(json.value).forEach((e) => values.value.push(e))

  const store = useAreaStore()

  function setDefault() {
    store.firstName = (store.firstName === "") ? values.value[0] : store.firstName
    store.lastName = (store.lastName === "") ? values.value[1] : store.lastName
    store.zipcode = (store.zipcode === "") ? values.value[2] : store.zipcode
    store.street = (store.street === "") ? values.value[3] : store.street
    store.city = (store.city === "") ? values.value[4] : store.city
    store.state = (store.state === "") ? values.value[5] : store.state
  }

  function click() {
    router.replace({ path: '/edit' })
  }
  
  onMounted(() => setDefault())

</script>

<template>
  <h2> Home </h2>
  <main>
    <p> {{ store.firstName }} </p>
    <p> {{ store.lastName }} </p>
    <p> {{ store.street }} {{ store.city }}, {{ store.state }} {{ store.zipcode }}</p>
  </main>
  <button type="button" @click="click"> Edit </button>
</template>

<style scoped>
  h2 {
      text-align: center;
      margin: 0;
      padding: 0;
      transform: translateY(20px)
  }

  main {
      display: flex;
      flex-direction: column;
      margin: 40px;
      padding: 20px;
      border: 1px solid gray
  }

  p {
      border: 1px solid grey;
  }

  button {
        width: 5vw;
        margin: 40px;
        text-align: center;
    }

  button:hover {
        background-color: #3C3
    }
</style>
