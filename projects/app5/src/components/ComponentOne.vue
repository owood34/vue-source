<script setup>
import {ref} from 'vue'

const comp_one = ref({
    title: "Reactive Web page",
    img: "../comp_one.png"
})


function imgChange() {
    comp_one.value.img = (comp_one.value.img === "../comp_one.png")
        ? "../banana-cat.gif" 
        : "../comp_one.png"
}

</script>

<template>
    <div>
        <h1> {{comp_one.title}} </h1>
        <img :src= "comp_one.img" @click="imgChange()">
    </div>
</template>

<style>
    h1 {
        text-align: center;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    }
    img {
        transform: translate(25vw, 0vh);
        height: 50vh;
        width: 50vw;
    }
</style>