<template>
  <div>
    <componenteSlot>
        Hola desde el slot
        <template slot="slot2"> Hola desde el slot II </template>
        <template slot="slot3"> Hola desde el slot III </template>
    </componenteSlot>
  </div>
</template>

<script>
import componenteSlot from "./components/componenteSlot";

export default {
  name: 'App',
  components: {
    componenteSlot
  }
}
</script>

<style>
</style>