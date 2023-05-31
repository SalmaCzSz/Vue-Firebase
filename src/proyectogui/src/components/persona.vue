<template>
    <div>
        <p>El nombre es: {{nombre}}</p>
        <p>La edad que tiene es: {{edad}}</p>
        <componenteHijo :nombre="nombre" :edad="edad"></componenteHijo>
    </div>
</template>

<script>
    import componenteHijo from "./hijo";  //anidación de componentes

    export default {
        name: "componentePersona",
        props: [        //array de propiedades
            'nombre',
            'edad'
        ],
        components: {
            componenteHijo
        }
    }
</script>

<style scoped>
</style>