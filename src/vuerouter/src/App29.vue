<template>
  <div id="app">
    <h1>6 pasos para trabajar con rutas en Vue</h1>
    <router-link tag="li" exact to="/"> Inicio </router-link>
    <router-link tag="li" to="/blog"> Blog </router-link>
    <hr>
    <router-link active-class="activo" tag="li" exact to="/">
        <a> Inicio </a>
    </router-link>
    <router-link active-class="activo" tag="li" to="/blog">
        <a> Blog </a>
    </router-link>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
.router-link-active {
    color: pink;
}
.router-link-active a{
    color: MediumVioletRed;
}
.activo{
    color: blue;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>