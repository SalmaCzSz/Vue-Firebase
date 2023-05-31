<template>
    <div>
        <p>Nombre: {{nombre}}</p>
        <p>Email: {{email}}</p>
        <p>Telefono: {{telefono}}</p>
        <hr>
    </div>
</template>

<script>
    export default {
        name: "componenteUsuarios",
        props: {
            nombre: {
                type: String,
                required: true,
                default: 'Salery'
            },
            email: String,
            telefono: String,
        }
    }
</script>

<style scoped>
</style>