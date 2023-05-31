<template>
  <div>
    <componentePersona nombre="Norman" edad="24"></componentePersona>
    <hr>
    <componentePersona nombre="Thamar" edad="22"></componentePersona>
  </div>
</template>

<script>
 import componentePersona from "./components/persona";

export default {
  name: 'App',
  components: {
    componentePersona
  }
}
</script>

<style>
</style>
