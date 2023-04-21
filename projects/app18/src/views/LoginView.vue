<script setup>
    import { useMenuStore } from '../stores/menu.js'

    const width = 400;
    const height = 637;

    const store = useMenuStore().menu

    function createStickman() {
        d3.select('svg').remove()

        const svg = d3.select("#app")
            .append('svg')
            .lower()
            .attr('width', width)
            .attr('height', height)

        const head = svg.append('circle')
            .attr('id', 'head')
            .attr('cx', 100)
            .attr('cy', 140)
            .attr('r', 50)
            .style('fill', 'white')
            .style('stroke', store.skin.value.charAt(0) + store.skin.value.slice(1))
            .style('stroke-width', useMenuStore().functions.body)

        const body = svg.append('line')
            .attr('id', 'body')
            .attr("x1", 100)
            .attr("y1", 190)
            .attr("x2", 100)
            .attr("y2", 340)
            .style('stroke', store.skin.value.charAt(0) + store.skin.value.slice(1))
            .style('stroke-width', useMenuStore().functions.body)

        const arm1 = svg.append('line')
            .attr('id', 'arm1')
            .attr("x1", 100)
            .attr("y1", 190)
            .attr("x2", 150)
            .attr("y2", 315)
            .style('stroke', store.skin.value.charAt(0) + store.skin.value.slice(1))
            .style('stroke-width', useMenuStore().functions.body)

        const arm2 = svg.append('line')
            .attr('id', 'arm2')
            .attr("x1", 100)
            .attr("y1", 190)
            .attr("x2", 50)
            .attr("y2", 315)
            .style('stroke', store.skin.value.charAt(0) + store.skin.value.slice(1))
            .style('stroke-width', useMenuStore().functions.body)

        const leg1 = svg.append('line')
            .attr('id', 'leg1')
            .attr("x1", 100)
            .attr("y1", 340)
            .attr("x2", 120)
            .attr("y2", 490)
            .style('stroke', store.skin.value.charAt(0) + store.skin.value.slice(1))
            .style('stroke-width', useMenuStore().functions.body)

        const leg2 = svg.append('line')
            .attr('id', 'leg2')
            .attr("x1", 100)
            .attr("y1", 340)
            .attr("x2", 80)
            .attr("y2", 490)
            .style('stroke', store.skin.value.charAt(0) + store.skin.value.slice(1))
            .style('stroke-width', useMenuStore().functions.body)
    }

    function change(attr) {
        console.log(attr)
        if (attr === "Skin") {
            let loop = useMenuStore().looping.skin_loop()
            loop = loop.charAt(0).toUpperCase() + loop.slice(1)
            store.skin.value = loop
            document.body.style.setProperty('--style', store.skin.value)
            createStickman()
        } else if (attr === "Body") {
            let loop = useMenuStore().looping.body_loop()
            loop = loop.charAt(0).toUpperCase() + loop.slice(1)
            store.body.value = loop
            createStickman()
        } else if (attr === "Face") {
            let loop = useMenuStore().looping.face_loop()
            loop = loop.charAt(0).toUpperCase() + loop.slice(1)
            store.face.value = loop
            createStickman()
        } else if (attr === "Hats") {
            let loop = useMenuStore().looping.hat_loop()
            loop = loop.charAt(0).toUpperCase() + loop.slice(1)
            store.hat.value = loop
            createStickman()
        } else if (attr === "Torso") {
            let loop = useMenuStore().looping.torso_loop()
            loop = loop.charAt(0).toUpperCase() + loop.slice(1)
            store.torso.value = loop
            createStickman()
        } else if (attr === "Pants") {
            let loop = useMenuStore().looping.pant_loop()
            loop = loop.charAt(0).toUpperCase() + loop.slice(1)
            store.pants.value = loop
            createStickman()
        } else if (attr === "Shoes") {
            let loop = useMenuStore().looping.shoe_loop()
            loop = loop.charAt(0).toUpperCase() + loop.slice(1)
            store.shoes.value = loop
            createStickman()
        }
    }

    function getFace() {
        return '../src/assets/heads/' + store.face.value.charAt(0).toLowerCase() + store.face.value.slice(1) + '.png'
    }

    function getHat() {
        return '../src/assets/hats/' + store.hat.value.charAt(0).toLowerCase() + store.hat.value.slice(1) + '.png'
    }

    function getTorso() {
        return '../src/assets/torso/' + store.torso.value.charAt(0).toLowerCase() + store.torso.value.slice(1) + '.png'
    }

    function getPants() {
        return '../src/assets/pants/' + store.pants.value.charAt(0).toLowerCase() + store.pants.value.slice(1) + '.png'
    }

    function getShoes() {
        return '../src/assets/shoes/' + store.shoes.value.charAt(0).toLowerCase() + store.shoes.value.slice(1) + '.png'
    }

    createStickman()
    
</script>

<template>
    <div>
        <main>
            <nav>
                <div v-for="i in store" v-bind:key="i">
                    <h1> {{ i.name }} </h1>
                    <button type="button" @click="change(i.name)"> {{ i.value }} </button>
                </div>
            </nav>
        </main>
        <img :src='getFace()' style="top: 100px; left: 80px;">
        <img :src='getHat()' style="top: 20px; left: 60px">
        <img :src='getTorso()' style="top: 195px; left: 60px; height: 150px">
        <img :src='getPants()' style="top: 310px; left: 60px; height: 150px">
        <img :src='getShoes()' style="top: 440px; left: 50px;"> 
        <h3>
            But first you gotta dress for the occasion!
        </h3>

        <img src="../assets/ballons.png" style="top: 100px; right: 100px; width: 300px; height: 300px">
        <img src="../assets/ballons.png" style="top: 300px; right: 600px; width: 200px; height: 200px">
        <img src="../assets/banner.png" style="top: -80px; left: 700px; width: 800px; height: 400px">
        <img src="../assets/table.png" style="top: 300px; left: 700px; width: 400px; height: 400px">
        <img src="../assets/ballons.png" style="top: 300px; left: 500px; width: 200px; height: 200px">
        <img src="../assets/presents.png" style="top: 200px; right: 60px; width: 600px; height: 600px">
    </div>
</template>

<style>
    :root {
        --style: black;
    }

    #app {
        display: flex;
        flex-direction: row;
    }

    img {
        position: absolute;
        width: 100px;
        height: 100px;
        z-index: 10;
    }

    h3 {
        position: absolute;
        top: 25px;
        left: 200px;
        max-width: 100px;
    }

    svg {
        z-index: -10;
        background-color: white !important;
        border: 3px solid var(--style)
    }

    main {
        background-color: white;
    }

    nav > * {
        border: 3px solid var(--style);
        display: flex;
        flex-direction: column; 
        justify-content: center;
        text-align: center;
    }

    button {
        border: 1px solid gray;
        background-color: white;
    }

</style>