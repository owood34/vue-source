<script setup>
  import { useMenuStore } from '../stores/menu.js'
  import { useRouter } from 'vue-router'

  let router = useRouter()

  let colors = useMenuStore().skin

  document.body.style.setProperty('--style', 'white')

  function login() {
    changeColor()
  }

  function changeColor() {
    let isFinished = false;
    let counter = 0;
    setInterval(() => {
          document.body.style.setProperty('--style', colors[counter % colors.length])
          counter++;
          console.log(colors[counter % colors.length])
          if (counter == 25) {
            router.replace({ path: '/login' })
          }
    }, 500)
  }


</script>

<template>
  <main>
    <h1> Hello! It's party time!</h1>
    <hr>
    <button @click='login'> Click for a party! </button>
  </main>
</template>

<style scoped>
  :root {
    --style: white;
  }

  main {
    width: 50vw;
    height: 80vw;
  }

  hr {
    transform: translateY(-21px);
    width: 80vw;
  }

  button {
    background-color: var(--style)
  }

</style>
