<script async setup>
    import { ref, reactive, onMounted } from 'vue'
    import { DataStore } from '../assets/DataStore.js'

    const links = reactive({})
    links.value = await DataStore.getWebsites("./links.json") 

    let showButton = ref([])
    let audioPlayer = undefined;
    let paused = false;

    function playAudio(url) {
        showButton.value.forEach((e) => e.showing = (url === e.url) ? false : true)
        isButtonActive(url)
        
        if (audioPlayer != undefined) {
            audioPlayer.pause();    
        }

        audioPlayer = document.createElement('audio')
        audioPlayer.src = url
        audioPlayer.play()

        audioPlayer.onended = () => showButton.value.find(e => e.url === url).showing = true;
    }

    function pauseAudio() {
        (!paused) ? audioPlayer.pause() : audioPlayer.play()
        paused = !paused
    }

    function isButtonActive(url) {
        if (showButton.value.find(e => e.url === url) === undefined) {
            return true;
        }
        return showButton.value.find(e => e.url === url).showing;
    }

    function isPauseButtonActive(url) {
        return !isButtonActive(url)
    }

    onMounted(() => Object.values(links.value).forEach(
        (e) => showButton.value.push({showing: true, url: e.url})
    )) 

</script>

<template>
    <section>
        <div v-for="link in links.value" v-bind:key="link">
            <p> {{ link.title }} </p>
            <button id="playButton" type="button" @click="playAudio(link.url)" v-if="isButtonActive(link.url)">
                <img src="../assets/playbutton.png">
            </button>
            <button id="pauseButton" type="button" @click="pauseAudio()" v-if="isPauseButtonActive(link.url)"> 
                <img src="../assets/pausebutton.png">
            </button>
            
            <p id="time"> {{ link.length }} </p>
            <p id="artist"> {{ link.artist}} </p>
        </div>
    </section>
</template>

<style>

    section {
        display: flex;
        width: 800px;
        flex-flow: column wrap;
        justify-content: center;
    }

    div {
        width: 200px;
        height: 200px;
        border: 1px solid rgb(216, 180, 180);
        background-color: rgb(150, 141, 141);
    }

    div p {
        font-family: 'Franklin Gothic Medium', Arial, sans-serif;
        text-align: center;
        color: rgb(92, 6, 23)
    }

    div button {
        transform: translate(70px, 20px);
        border: 1px solid gray;
        border-radius: 40px
    }

    #time {
        transform: translateY(10px)
    }

    div #artist {
        transform: translateY(5px)
    }

    div button img {
        width: 40px;
        height: 40px;
        border: 0.1px solid gray;
        border-radius: 40px
    }
</style>