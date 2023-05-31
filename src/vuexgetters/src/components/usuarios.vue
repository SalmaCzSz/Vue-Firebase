<template>
  <div>
    <listadoActivos></listadoActivos>
    <ul>
        <li v-bind:key="usuario.nombre" v-for="usuario in usuarios">
            {{usuario.nombre}}
        </li>
    </ul>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import listadoActivos from './listadoActivos'

export default {
  name: 'componenteUsuarios',
  computed: mapState(['usuarios']),
  components: {
    listadoActivos
  }
}
</script>

<style scoped>
</style>
