<script setup>
    import { ref } from 'vue'

    const props = defineProps(['name', 'type'])

    const value= ref({
      name: props.name,
      type: props.type
    })

</script>

<template>
  <div id="Index_Body">
    <label for="name"> Pokemon Name </label>
    <input id="name" v-model='value.name' />

    <label id="label_t" for="type"> Pokemon Type </label>
    <input id="type" v-model='value.type' />

    <button type="button" @click="$emit('addRecord', value)">Add</button>
  </div>
</template>

<style>
  #Index_Body {
    display: flex;
    flex-direction: column;
    border: 3px darkred solid;
    width: 200px;
    height: 200px;
  }
  button {
    background: lightskyblue;
  }
  label, input {
    text-align: center;
  }

  #type, #label_t {
    transform: translateY(20px);
  }

  button {
    border-radius: 50px;
    border: 1px solid white;
    width: 75px;
    height: 75px;
    transform: translate(60px, 40px);
  }
</style>