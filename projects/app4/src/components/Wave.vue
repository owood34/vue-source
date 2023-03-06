<template>
  <div id="wave">
    <div id = "inner_wave"></div>
  </div>
</template>

<style>
    #wave {
        height: 55vh;
        width: 55vh;
        border-radius: 50% 50% 50% 50%;
        overflow: hidden;
        background-color: rgb(247, 247, 162);
    }

    #inner_wave {
      height: 53vh;
      width: 53vh;
      border: none;
      border-radius: 50% 49% 53% 30%;
      background-color: black;
    }
</style>