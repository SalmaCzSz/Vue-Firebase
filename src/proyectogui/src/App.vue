<template>
  <div>
    <h1>Componente padre</h1>
    <hr>
    <componenteElemento tipo="h1"> Texto de este elemento </componenteElemento>
    <componenteElemento tipo="h2"> Texto de este elemento </componenteElemento>
    <componenteElemento tipo="h3"> Texto de este elemento </componenteElemento>
    <componenteElemento tipo="aside"> Contenido de aside </componenteElemento>
    <componenteElemento tipo="h1"> Contenido de aside </componenteElemento>
  </div>
</template>

<script>
import componenteElemento from "./components/componenteElemento";

export default {
  name: 'App',
  components: {
    componenteElemento
  }
}
</script>

<style scoped>
    h1{
        color: blue;
    }
</style>
