<script setup>
    import { ref } from 'vue'

    const props = defineProps(['name', 'type'])

    const val_name = ref(props.name)
    const val_type = ref(props.type)

</script>

<template>
    <div id="card">
        <span id="title"> Entry </span>
        <span id="name"> Name: {{ val_name }} </span>
        <span id="card_type"> Type: {{ val_type }} </span>
    </div>
</template>

<style>
    #card {
        display: inline-flex;
        border: 1px solid darkred;
        background: white;
        flex-direction: column;
        width: 100px;
        height: 100px;
        justify-content: space-evenly;
    }
    span {
        text-align: center;
    }
    #title {
        font-size: 25px;
    }
</style>