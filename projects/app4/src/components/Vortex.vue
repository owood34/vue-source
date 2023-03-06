<script>
import Wave from "./Wave.vue";

export default {
  components: {
    Wave,
  },
};
</script>

<template>
    <body>
        <div id="circle">Isnt the meaning in this question?</div>
        <div id="top_left"><Wave></Wave></div>
        <div id="top_right"><Wave></Wave></div>
        <div id="bottom_left"><Wave></Wave></div>
        <div id="bottom_right"><Wave></Wave></div>
        <div id="answer">SUS<img src="../assets/answer.png"></div>
    </body>
</template>

<style>
body {
  background-color: black;
  position: absolute;
}
#circle {
  z-index: 10;
  height: 50vh;
  width: 50vh;
  border-radius: 50%;
  background-color: black;
  top: 25vh;
  right: -35vw;
  position: absolute;
  color: rgb(247, 247, 162);
  font-size: 200%;
  text-align: center;
  line-height: 50vh;
}
#top_left {
  z-index: 0;
  position: relative;
  top: 20vh;
  right: -37vw;
  opacity: 1;
  transform: rotate(260deg) scaleY(-1);
}
#top_right {
  z-index: 1;
  position: relative;
  top: -50vh;
  right: -37vw;
  opacity: 0.8;
  transform: rotate(-80deg);
}
#bottom_left {
  z-index: 2;
  position: relative;
  top: -76.3vh;
  right: -39vw;
  opacity: 0.6;
  transform: rotate(-295deg) scaleY(1);
}
#bottom_right {
  z-index: 3;
  position: relative;
  top: -145vh;
  right: -39vw;
  opacity: 0.4;
  transform: rotate(35deg);
}
#answer {
  z-index: 10;
  height: 50vh;
  width: 50vh;
  border-radius: 50%;
  background-color: black;
  top: 25vh;
  right: -35vw;
  position: absolute;
  opacity: 0;
  color: rgb(247, 247, 162);
  font-size: 200%;
  text-align: center;
  line-height: 50vh;
}
#img {
  position: relative;
  top: -10vh;
}
#answer:hover {
  opacity: 100%;
}
</style>