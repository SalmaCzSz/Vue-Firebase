<template>
  <div>
    <Saludo></Saludo>
    <componenteDos></componenteDos>
  </div>
</template>

<script>
 import Saludo from "./components/Saludo";
 import componenteDos from "./components/ComponenteDos";

export default {
  name: 'App',
  components: {
    Saludo,
    componenteDos
  }
}
</script>

<style>
</style>
