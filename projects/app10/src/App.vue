<script>
  import PlayList from './components/PlayList.vue'
  
  export default {
  components: {
        PlayList
    }
}
</script>

<template>
  <Suspense>
      <PlayList />
  </Suspense>
</template>