<script setup>
    defineProps({
        name: String,
        price: String,
        src: String,
        big: String
    })
</script>

<template>
    <div id="card" v-if="big === 'false'">
        <span id="name"> Name: {{ name }} </span>
        <span id="price"> Price: {{ price }} </span>
        <img :src="src">
    </div>
    <div id="big_card" v-else>
        <h3> {{ name }} </h3>
        <img :src="src">
        <p> This is a description of <b>{{ name }}</b> that costs <b><i>{{ price }}</i></b>. 
            This is text to make the description look bigger than it actually is. 
            In a way you can say this is filling up most of the page so it is called filler. 
            Not to be confused with filling like cake filling or more. 
            The secret word is coconut. 
            You know if you are reading this far you are either curious on what is going on or are incredible bored. 
            Anyways the secret word is coconut because it is a wonderful fruit and a vehicle. 
            If you do not get the reference you are uncultured in movie watching. 
            It is from the Fantastic 1975 film, Monty Python and the Holy Grail. 
            You know to the standard reader you could have already been 1 minute into the film. 
            So what are you waiting for?
        </p>

    </div>
</template>

<style scoped>
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

    #big_card {
        display: inline-flex;
        background: white;
        flex-direction: column;
        flex-basis: 70%;
        flex-wrap: wrap;
        width: 800px;
        height: 500px;
        justify-content: space-between;
    }

    #big_card > img {
        width: 300px;
        height: 300px;
    }

    #big_card > p {
        transform: translate(350px, -300px)
    }

</style>