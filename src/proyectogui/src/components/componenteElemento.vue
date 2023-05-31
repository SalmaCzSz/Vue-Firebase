<template>
    <div>
        <h1 v-if="tipo == 'h1'">
            <slot></slot>
        </h1>
        <h2 v-if="tipo == 'h2'">
            <slot></slot>
        </h2>
        <h3 v-if="tipo == 'h3'">
             <slot></slot>
        </h3>
        <aside v-if="tipo == 'aside'">
            <slot></slot>
        </aside>
    </div>
</template>

<script>
    export default {
        name: "componenteElemento",
        props: ['tipo'],
        render(createElement){
            return createElement(
                this.tipo,              //tipo de elemento a renderizar
                this.$slots.default,    //contenido del elemento
            )
        }
    }
</script>

<style scoped>
    h1{
      color: red;
    }
</style>