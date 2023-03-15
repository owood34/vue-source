<script>
export default {
    inject: ['message'],
}
</script>

<template>
    <div>
        <p> 
            This is the Child2 component or the GrandChild component to App.vue
            <br> In the script tag holds the value injected from App.vue 
            and stores it in a variable.
            <br> 
        </p> 
        <h1>
            Message from App.vue → GrandChild component: {{ message }}
        </h1>
    </div>
</template>

<style>

</style>