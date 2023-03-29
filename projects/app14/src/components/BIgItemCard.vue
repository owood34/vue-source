<script setup>
    defineProps({
        name: String,
        price: String,
        src: String
    })
</script>

<template>
    <div id="card">
        <span id="name"> Name: {{ name }} </span>
        <span id="price"> Price: {{ price }} </span>
        <img :src="src">
    </div>
</template>

<style>
    #card {
        display: inline-flex;
        border: 1px solid blue;
        background: white;
        flex-direction: column;
        width: 200px;
        height: 200px;
        justify-content: space-evenly;
    }
    img {
        width: 100px;
        height: 100px;
        text-align: center;
    }
    span {
        text-align: center;
    }
    #title {
        font-size: 25px;
    }
</style>