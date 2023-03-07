<script setup>
import {ref, reactive} from 'vue'
import Index from './components/Index.vue'
import Card from './components/Card.vue'

let records = reactive([])

let data = ref({
  name: 'Example',
  type: 'Fire'
})

</script>

<template>
  <div id="body">
    <h1> Pokedex </h1>
    <Index 
      :modelValue="data" 
      @update:modelValue="arg => data = arg"
      @addRecord="val => records.push(val)" 
    />
    <div id="card_body">
      <div v-for="record in records" v-bind:key="record">
        <Card v-bind="record" />
      </div>
    </div>
  </div>
</template>

<style>
  #body {
    margin-top: -100px;
    margin-right: 0px;
  }
  #card_body {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    flex-wrap: wrap;
    height: 600px;
    background: red;
    border: 3px solid darkred;
    transform: translate(-1px ,-2px);
  }
  h1 {
    transform: translate(1300px, 150px);
    font-size: 50px;
  }
</style>