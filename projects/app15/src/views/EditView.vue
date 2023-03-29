<script async setup>
    import { ref } from 'vue'
    import { useRouter } from 'vue-router'
    import { useAreaStore } from '../stores/area.js'

    const store = useAreaStore()
    const router = useRouter()

    const firstName = ref("")
    const lastName = ref("")
    const zipcode = ref("")
    const street = ref("")
    const city = ref("")
    const state = ref("")

    firstName.value = store.firstName
    lastName.value = store.lastName
    zipcode.value = store.zipcode
    street.value = store.street
    city.value = store.city
    state.value = store.state

    function submit() {
        store.firstName = firstName.value
        store.lastName = lastName.value
        store.zipcode = zipcode.value
        store.street = street.value
        store.city = city.value
        store.state = state.value

        router.replace({ path: '/' })
    }

</script>

<template>
    <h2> Edit Data </h2>
    <div>
        <label for="fname"> First Name </label>
        <input name="fname" v-model="firstName" type="text" />

        <label for="lname"> Last Name </label>
        <input name="lname" v-model="lastName" type="text" />

        <div id="notNames">
            <label for="street"> Street </label>
            <input name="street" v-model="street" type="text" />

            <label for="city"> City </label>
            <input name="city" v-model="city" type="text" />

            <label for="state"> State </label>
            <input name="state" v-model="state" type="text" />

            <label for="zipcode"> Zipcode </label>
            <input name="zipcode" v-model="zipcode" type="text" />
        </div>

        <button type="button" @click="submit"> Done </button>
    </div>
</template>

<style scoped>
    h2 {
        text-align: center;
        margin: 0;
        padding: 0;
        transform: translateY(20px)
    }

    div {
        display: flex;
        flex-direction: column;
        margin: 40px;
        padding: 20px;
        border: 1px solid gray
    }

    label {
        transform: translateY(20px);
        text-align: center;
        opacity: 0.5;
    }

    label:hover {
        z-index: -5
    }

    input:focus {
        z-index: 1;
    }

    button {
        width: 5vw;
        text-align: center;
    }

    button:hover {
        background-color: #3C3
    }
</style>