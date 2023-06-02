<template>
  <div id="app">
    <comHome></comHome>
  </div>
</template>

<script>
import comHome from './components/home'

export default {
  name: 'App',
  components: {
    comHome
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
