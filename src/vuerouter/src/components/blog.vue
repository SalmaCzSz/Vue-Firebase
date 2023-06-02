<template>
    <div>
        <h1 v-alerta="45">Blog</h1>
        <button @click="volverInicio">Volver a inicio</button>
    </div>
</template>

<script>
    export default{
        name: "comBlog",
        methods:{
            volverInicio(){
                this.$router.push('/', () => console.log('Has vuelto'))
            }
        }
    }
</script>

<style>
</style>