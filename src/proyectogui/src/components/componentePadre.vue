<template>
    <div>
        <button @click="mostrar=true">Mostrar componente hijo</button>
        <componenteHijo @cerrar="mostrar=false" v-show="mostrar"></componenteHijo>
    </div>
</template>

<script>
    import componenteHijo from "./componenteHijo";

    export default {
        name: "componentePadre",
        components:{
            componenteHijo,
        },
        data(){
            return{
                mostrar: false,
            }
        }
    }
</script>

<style scoped>
</style>