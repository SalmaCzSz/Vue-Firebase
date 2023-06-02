<template>
  <div>
    <h1>Actions con Vuex</h1>
    <ul>
        <li v-for="user in usuario" v-bind:key="user.id">
            {{user.name}}
        </li>
    </ul>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'

export default {
  name: 'comHome',
  computed: {
    ...mapState(['usuario'])
  },
  methods: {
    ...mapActions(['getusuarios'])
  },
  mounted(){
    this.getusuarios()
  }
}
</script>

<style scoped>
</style>
