<template>
  <div>
    <p>{{contador}}</p>
    <button @click="aumentar"> + </button>
    <button @click="reducir"> - </button>
  </div>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
      name: 'comContador',
      computed: mapState(['contador']),
      methods: {
        aumentar(){
            //this.$store.state.contador++
            this.$store.commit('aumentar')
        },
        reducir(){
            //this.$store.state.contador--
            this.$store.commit('reducir')
        }
      }
    }
</script>

<style scoped>
</style>
