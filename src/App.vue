<template>
  <div id="app" color="#21B295">
   <Login/>
  </div>
</template>

<script>
import Register from "./components/Login.vue"
import Login from "./components/Login.vue"

export default {
  name: 'App',
  components: {
   Login
  }
}
</script>

<style scoped>

</style>
