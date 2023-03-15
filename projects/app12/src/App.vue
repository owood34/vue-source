<script>
  import Child1 from './components/Child1.vue'

  export default {
    components: {
      Child1
    },
    data() {
      return {
        message: 'Hello'
      }
    },
    provide() {
      return {
        message: this.message
      }
    }
  }

</script>

<template>
  <div>
    <h1> This is the App.vue </h1>
    <p> In order to inject information 
      from one component to another nested component
      App needs to provide the information.

      <br> The data() of inside the script tags you can put your message there. 
    </p>
    <Child1 />
  </div>
</template>

<style>

</style>