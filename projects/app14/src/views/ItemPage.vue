<script async setup>
    import { ref, reactive } from 'vue'
    import { useRoute, RouterLink } from 'vue-router'
    import { DataStore } from '../../public/DataStore.js'
    import Card from '../components/ItemCard.vue'
    import Navbar from '../components/Navbar.vue'

    const json = reactive({})
    const route = useRoute()
    let found_items = ref([])

    json.value = await DataStore.getWebsites('../links.json')
    Object.values(json.value).forEach((e) => found_items.value.push(e.name))

    function checkItems() {
        let item = undefined
        found_items.value.forEach((e) => {
            if(e.replace(/\s+/g, "_").toLowerCase() === route.path.slice(7)) {
                item = e;
            } 
        })
        return item
    }

    function getPrice(item) {
        let price = undefined;
        Object.values(json.value).forEach((e) => {
            if (e.name === item) {
                price = e.price;
            }
        })
        return price;
    }

    function getImage(item) {
        let src = "../";
        Object.values(json.value).forEach((e) => {
            if (e.name === item) {
                src += e.image;
            }
        })
        return src;
    }
</script>

<template>
    <nav> <Navbar /> </nav>
    <h1> Shop </h1>
    <div v-if="$route.path === '/items'">
        <div v-for="item in json.value" :key="item">
            <Card :name="item.name" :price="item.price" :src="item.image" big="false" />
        </div>
    </div>
    <div v-else>
        <div v-if="checkItems() !== undefined">
            <Card :name="checkItems()" :price="getPrice(checkItems())" :src="getImage(checkItems())" big="true" />
        </div>
        <div v-else>
            <p> Cannot find "{{ $route.path.slice(7) }}" in the store </p>
            <RouterLink to="/items" class="link"> Back to Store List </RouterLink>
        </div>
    </div>
</template>