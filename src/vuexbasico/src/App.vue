<template>
  <div id="app">
    <h1>Ejemplo de Vuex básico</h1>
    <componenteContador></componenteContador>
    <leerStore></leerStore>
  </div>
</template>

<script>
import componenteContador from "./components/contador";
import leerStore from "./components/leerStore";

export default {
  name: 'App',
  components: {
    componenteContador,
    leerStore
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
