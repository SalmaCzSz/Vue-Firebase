<template>
  <div>
    <p>Listado de usuarios activos: {{listadoactivo}}</p>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'listadoActivos',
  computed: mapGetters(['listadoactivo'])
}
</script>

<style scoped>
</style>
