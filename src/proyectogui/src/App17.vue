<template>
  <div>
    <componenteUsuarios v-for="usuario in usuarios"
                        v-bind:key="usuario.id"
                        :nombre="1"
                        :email="usuario.email"
                        :telefono="usuario.phone">
    </componenteUsuarios>
  </div>
</template>

<script>
 import axios from 'axios'
 import componenteUsuarios from "./components/usuarios";

export default {
  name: 'App',
  components: {
    componenteUsuarios
  },
  data(){
    return{
        usuarios: [],
    }
  },
  methods: {
    obtenerUsuarios(){
        axios.get('https://jsonplaceholder.typicode.com/users')
             .then((respuesta) => this.usuarios = respuesta.data)
    }
  },
  mounted(){
    this.obtenerUsuarios()
  },
}
</script>

<style>
</style>
