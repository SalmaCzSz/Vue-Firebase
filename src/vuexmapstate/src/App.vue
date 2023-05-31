<template>
  <div id="app">
    <h1>Ejemplo de Vuex MapState</h1>
    <p>{{this.$store.state.nombre}}</p>
    <p>{{nombre}}</p>
    <p>{{edad}}</p>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: 'App',
  components: {
  },
  /*
  computed:
    nombre(){
        return this.$store.state.nombre
    }

  computed: mapState ({
    nombre: (state) => state.nombre,
    edad: function (state) {
        return state.edad
    }
  }),
  */
  computed: mapState(['nombre', 'edad'])
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
