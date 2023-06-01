<template>
  <div id="app">
    <h1>Vuex mutations</h1>
    <comContador></comContador>
  </div>
</template>

<script>
import comContador from './components/contador'

export default {
  name: 'App',
  components: {
    comContador
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
