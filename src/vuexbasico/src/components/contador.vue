<template>
    <div>
        <p>El valor del contador es: {{this.$store.state.contador}} </p>
        <button @click="Sumar">Sumar</button>
        <button @click="Restar">Restar</button>
    </div>
</template>

<script>
    import {store} from "../store/store";

    export default{
        name: "componenteContador",
        store,
        methods: {
            Sumar(){
                this.$store.commit('sumar')
            },
            Restar(){
                this.$store.commit('restar')
            }
        }
    }
</script>

<style scoped>
</style>