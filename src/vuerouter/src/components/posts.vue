<template>
    <div>
        <h1>Recepción del parametro de la ruta</h1>
        <p> {{id}} </p>
    </div>
</template>

<script>
    export default{
        name: "comPosts",
        data(){
            const {id} = this.$route.params
            return {
                id
            }
        }
    }
</script>

<style>
</style>