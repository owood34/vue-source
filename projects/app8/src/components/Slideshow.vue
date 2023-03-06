<script setup>
// import { createClient } from "pexels";
import { ref, reactive } from "vue";
import { watch } from 'vue'
import { onMounted } from 'vue'

/* const client = createClient(
  'QSIGmHeZ1n3SNEs6Pn513NLZps5dzEGVNwOTIqAXW5K3jOXADIO2lF4U'
) **/

const images = [
    {
        alt: "Lichtenstein Castle",
        photographer: "Martha Sales",
        photographer_url: "https://www.pexels.com/@mart/",
        url: "./pexels_white_castle.jpeg"
    },
    {
        alt: "Low Angle Photography of Religious Catherdral",
        photographer: "Kris Schulze",
        photographer_url: "https://www.pexels.com/@kris-schulze-42369/",
        url: "./pexels_interior_chapel.jpeg"
    },
    {
        alt: "Cathedral Interior Religious with Benches Empty",
        photographer: "Pixabay",
        photographer_url: "https://www.pexels.com/@pixabay/",
        url: "./pexels_chapel_empty.jpeg"
    }
]

const collection = reactive({
  media: {},
})

const photo = reactive({
  name: "",
  photographer: "",
  photographer_url: "",
  url: ""
})

let index = 0;
collection.media = images;
loadImage()

function indexIncrease() {
    index = (++index < images.length) ? index : images.length - 1;
    loadImage()
}

function indexDecrease() {
    index = (--index > -1) ? index : -1;
    loadImage()
}

function buttonOneDisabled() {
    return (index === images.length - 1);
}

function buttonTwoDisabled() {
    return (index === 0);
}

/*
async function getCollection() {
  // get the meta-data for all collections
  let result = await client.collections.all({ per_page: 1 })

  // get the id of first collection
  const id = result.collections[0].id

  // get media for the collection
  result = await client.collections.media({ id, type: 'photos', per_page: 6 })

  // cache the media meta-data
  collection.media = result.media
}

async function loadImage() {
  photo.name = collection.media[index].alt
  photo.photographer = collection.media[index].photographer
  photo.photographer_url = collection.media[index].photographer_url
  photo.url = collection.media[index].src.tiny
}

watch(collection, () => {
  console.log("collection changed")

  if (collection.media.length > 0) {
    loadImage()
  }
})

onMounted(() => {
  console.log("onmounted")
  getCollection()
})
*/

function loadImage() {
  photo.name = collection.media[index].alt
  photo.photographer = collection.media[index].photographer
  photo.photographer_url = collection.media[index].photographer_url
  photo.url = collection.media[index].url
}

</script>

<template>
  <div id="body">
    <button id="buttonOne" class="btn" @click="indexIncrease" :disabled="buttonOneDisabled()"> → </button>
    <img :src="photo.url" id="img">
    <button id="buttonTwo" class="btn" @click="indexDecrease" :disabled="buttonTwoDisabled()"> ← </button> <br>
    <p>{{ photo.name }} </p><br>
    <a :href="photo.photographer_url" target="_blank" id="photographer">
      {{ photo.photographer }}
    </a>
  </div>
</template>

<style>
    body {
        position: absolute;
        background-color: rgb(231, 222, 222);
        color: rgb(59, 46, 46);
    }

    img {
        position: relative;
        width: 30vw;
        height: 50vh;
        top: 100px;
        right: -100px;
    }

    button {
        position: relative;
        height: 50vh;
        top: -13.75vh;
        right: -5.25vw;
    }

    a {
      position: relative;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      text-decoration: none;
      border: 1px solid rgb(163, 133, 133);
      color: blueviolet;
      padding: 10px;
      top: -14.5vh;
      right: -17.5vw;
    }

    p {
      position: relative;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      border: 1px solid rgb(163, 133, 133);
      padding: 10px;
      top: -12vh;
      right: -5vw;
    }

</style>