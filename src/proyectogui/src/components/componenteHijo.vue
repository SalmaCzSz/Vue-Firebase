<template>
    <div>
        <h2>Soy el componente hijo</h2>
        <button @click="emitirEvento">Cerrar hijo</button>
    </div>
</template>

<script>
    export default {
        name: "componenteHijo",
        methods: {
            emitirEvento(){
                this.$emit('cerrar')
            }
        }
    }
</script>

<style scoped>
</style>