<script setup>
    import { RouterLink, useRoute } from 'vue-router'
    import { ref, watchEffect, onMounted } from 'vue'

    const item_search = ref("")

    function getItemURL() {
        let check = item_search.value.replace(/\s+/g, "_").toLowerCase()
        console.log(check)
        let str = '/items/' + check
        return str;
    }

    function setLabel() {
        console.log(route.params.id)
        label = route.params.id
    }

    function isHomePage() {
        return label === '/' || label === undefined;
    }

    function isValidItem() {
        return getItemURL().slice(6) !== ''
    }
</script>

<template>
    <nav>
        <h1> Navigation Bar </h1>
        <RouterLink to="/" class="link">Home</RouterLink>
        <div>
            <RouterLink to="/items" class="link" v-if="$route.path === '/'">Shop</RouterLink>
            <div v-if="$route.path !== '/'">
                <RouterLink :to="getItemURL()" class="link">Search </RouterLink>
                <input id="search" v-model="item_search" type="text">
            </div>
        </div>
    </nav>
</template>

<style>

</style>