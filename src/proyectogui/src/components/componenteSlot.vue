<template>
    <div>
        <h1 style="color:red">
            <slot> Hola, desde el componente </slot>
        </h1>
        <hr>
        <h2>
            <slot name="slot2">Hola desde el componente slot 2</slot>
        </h2>
        <hr>
        <h3>
             <slot name="slot3">Hola desde el componente slot 3</slot>
        </h3>
    </div>
</template>

<script>
    export default {
        name: "componenteSlot",
    }
</script>

<style scoped>
</style>