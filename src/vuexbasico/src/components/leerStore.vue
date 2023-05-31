<template>
    <div>
        <p>El valor es: {{this.$store.state.contador}} </p>
    </div>
</template>

<script>
    import {store} from "../store/store";

    export default{
        name: "leerStore",
        store
    }
</script>

<style scoped>
</style>