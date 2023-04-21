<script setup>
  import { useComponentStore } from './stores/components';

  const store = useComponentStore()

</script>

<template>
  <main>
    <div v-for="i in store.list" :class="i"> <b>{{i}}</b> </div>
  </main>
</template>

<style>
  main {
    display: grid;
    grid-template-rows: [row1] 1fr [row2] 1fr [row3] 1fr [row4] 1fr;
    grid-template-columns: [col1] 1fr [col2] 1fr [col3] 1fr;
    margin: 30px;
    transform: translateY(20px);
    width: calc(100vw - 100px);
    height: calc(100vh - 100px);
  }

  main > * {
    display: grid;
    text-align: center;
    color: black;
    font-size: 50px;
    border: 3px solid black;
  }

  .I {
    background-color: blue;
    grid-column-start: col1;
    grid-column-end: col4;
    grid-row-start: row1;
    grid-row-end: row3;
  }

  .II {
    background-color: red;
    grid-column-start: col1;
    grid-column-end: col1;
    grid-row-start: row2;
    grid-row-end: row2;
  }

  .III {
    background-color: purple;
    grid-column-start: col2;
    grid-column-end: col4;
    grid-row-start: row2;
    grid-row-end: row2;
  }

  .IV {
    background-color: green;
    grid-column-start: col1;
    grid-column-end: col3;
    grid-row-start: row3;
    grid-row-end: row3;
  }

  .V {
    background-color: orange;
    grid-column-start: col3;
    grid-column-end: col3;
    grid-row-start: row3;
    grid-row-end: row3;
  }

  .VI {
    background-color: turquoise;
    grid-column-start: col1;
    grid-column-end: col4;
    grid-row-start: row4;
    grid-row-end: row4;
  }
</style>