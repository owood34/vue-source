<script setup>
  import { ref } from 'vue'

  const show = ref(false)

  const loop = ref([])
  const colors = ["#F00", "#0FF", "#F0F", "#FF0"]
  let arr = 0;
  const time = 500
  let value = 100;
  let intervalID;

  function onClick() {
    show.value = !show.value;

    if (show.value) {
      if (intervalID !== undefined) {
        clearInterval(intervalID);
      }
      intervalID = setInterval(insertIntoLoop, time)
    } else {
      if (intervalID !== undefined) {
        clearInterval(intervalID);
      }
      intervalID = setInterval(removeLoop, time)
    }
  }

  function insertIntoLoop() {
    if (value > 20 && show.value) {
      value -=10;

      loop.value.push({length: value, color: colors[++arr % colors.length]})
    }
  }

  function removeLoop() {
    if (value < 100 && !show.value) {
      value += 10
      arr--;
      loop.value.pop()
    }
    console.log(value)
  }

  function inArray(obj) {
    if (show) {
      return true;
    }
    return loop.value.find((e) => e.length === obj.length && e.color === obj.color) !== undefined
  }

  
</script>

<template>
  <div v-for="l in loop">
    <Transition name="box" appear>
      <div v-if="inArray(l)" 
        class="box" 
        :style="{ 
          width: l.length + 'px', 
          height: l.length + 'px', 
          backgroundColor: l.color, 
          top: (l.length + 50) + 'px', 
          right: (l.length + 50) + 'px'
        }"
      />
    </Transition>
  </div>
  <p>
      Animations can appear in for each loops 
        if you add appear at the end of it. 
          However, you do not get the leave effect for each of them. 
            Press the Toggle button to see them fade in.
    </p>
    <Transition name="box" appear>
      <div v-if="show" class="box_stable" />
    </Transition>
  <button type="button" @click="onClick"> Toogle Fade </button>
</template>

<style>
  .box-enter-active {
    animation: fade 1s;
  }

  .box-leave-active, .box-leave-from {
    animation: fade 1s reverse
  }

  @keyframes fade {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 0.8;
    }
  }

  button {
    z-index: 10;
  }

  .box_stable {
    position: absolute;
    z-index: -10;
    top: 115px;
    left: 80px;
    width: 100px;
    height: 100px;
    background-color: red;
    border: 1px solid black;
  }

  .box {
    position: absolute;
    z-index: -10;
    border: 1px solid black;
  }
</style>