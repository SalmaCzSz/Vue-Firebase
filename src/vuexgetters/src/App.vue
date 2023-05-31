<template>
  <div id="app">
    <h1>Ejemplo de Getters con Vuex</h1>
    <componenteUsuarios></componenteUsuarios>
  </div>
</template>

<script>
import componenteUsuarios from './components/usuarios'

export default {
  name: 'App',
  components: {
    componenteUsuarios
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
